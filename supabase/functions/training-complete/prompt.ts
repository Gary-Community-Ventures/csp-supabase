import { Prompt, context, p, kv } from "../_shared/prompting.ts";
export { trainings } from "../_shared/trainings.ts";

export type Training = {
  name: string;
  status: "complete" | "pending";
  dbFieldName: string;
  description: string;
};

export function parse(res: string) {
  const code = res.match(/<code>([\s\S]*)<\/code>/)?.[1].trim();
  const message = res.match(/<message>([\s\S]*)<\/message>/)?.[1].trim();

  return { code, message };
}

export function generatePrompt(
  trainings: { [key: string]: Training },
  language: string,
): Prompt {
  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove that they completed one of the trainings.",
      "The current training status will be in the following format:",
      kv(
        "training",
        p(
          kv("name", "[Training Name]"),
          kv("status", "complete|pending"),
          kv("code", "[Code]"),
          kv("description", "[Description]"),
        ),
      ),
      "You will also be provided with the language of that you should give your response in.",
      "The language will be provided in the following format:",
      kv("language", "[Language]"),
      "The a documnet will be provided that contains is supposed to be a certificate of completion of one of the trainings.",
      "The agent will say which training was completed if any.",
      "The agent will include a breif message that will be returned to the user.",
      "The agent will only translate the message, and will not translate the code or tags.",
      "If a training was completed the message will include which training was completed.",
      "If no trainings were proven to be completed the message should include what is wrong with the document.",
      "If no trainings were proven to be completed the message should also include instructions to email support@capcolorado.org if the user believes the result is incorrect.",
      "The agent's response will be in the following format:",
      kv("code", "[Code]"),
      kv("message", "[Message]"),
      "If no trainings were proven to be completed the agent shoud return:",
      kv("code", "none"),
      kv("message", "[Message]"),
      "Here is an example of a passing response:",
      kv("code", "cpr_online_training"),
      kv(
        "message",
        "You completed the American Red Cross CPR Online Training.",
      ),
      "Here is an example of a failing response:",
      kv("code", "none"),
      kv(
        "message",
        "The document provided does not appear to a valid certification. If you believe this is incorrect, please email support@capcolorado.org.",
      ),
      "Here is another example of a failing response:",
      kv("code", "none"),
      kv(
        "message",
        "The certificate provided does not appear on the list of trainings. If you believe this is incorrect, please email support@capcolorado.org.",
      ),
      "Here is an example of a document that was already completed:",
      kv("code", "none"),
      kv(
        "message",
        "You have already completed the American Red Cross CPR Online Training.",
      ),
    ),
    user: p(
      kv(
        "trainings",
        p(
          ...Object.entries(trainings).map(([code, training]) => {
            return p(
              kv("name", training.name),
              kv("status", training.status),
              kv("code", code),
              kv("description", training.description),
            );
          }),
        ),
      ),
      kv("language", language),
    ),
  };
}
