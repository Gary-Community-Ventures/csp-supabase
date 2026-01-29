import { z } from "npm:zod";
import { type Prompt, p, kv, context } from "../_shared/prompting.ts";
import { trainings } from "../_shared/trainings.ts";

function responseFormat() {
  return p(
    "The response should look like the following. All fields are required:",
    kv("message", "[Message]"),
    kv("validated", "[true|false]"),
  );
}
function example(req: string, resMessage: string, resValidated: boolean) {
  return p(
    kv("request", req),
    kv(
      "response",
      p(
        kv("message", resMessage),
        kv("validated", resValidated ? "true" : "false"),
      ),
    ),
  );
}
export function parse(res: string) {
  const message = res.match(/<message>([\s\S]*)<\/message>/)?.[1];
  const validated =
    res
      .match(/<validated>([\s\S]*)<\/validated>/)?.[1]
      .toLowerCase()
      .trim() === "true";

  console.log(message, validated);

  return { message, validated };
}

function agePrompt(rawData: unknown): Prompt {
  const schema = z.object({
    name: z.string(),
    birthDate: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove that a child is a specific age.",
      "The agent will be given the child's birth date, name, and the document (in a variety of formats).",
      "The agent will say if the child's age is validated, and summarize anything else in the document that is relevant to the age.",
      "The request will look like:",
      kv("birth-date", "YYYY-MM-DD"),
      kv("child-name", "[First Last]"),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(kv("birth-date", "2025-01-01"), kv("child-name", "Emma Johnson")),
        "Emma Johnson was born on January 1, 2025 to Sarah and Michael Johnson at 2:30 PM which is the same as the birthdate provided.",
        true,
      ),
      example(
        p(kv("birth-date", "2025-01-01"), kv("child-name", "Emma Johnson")),
        "The document provided does not mention Emma Johnson's birth date.",
        false,
      ),
      example(
        p(kv("birth-date", "2025-01-01"), kv("child-name", "Emma Johnson")),
        "Emma Johnson was born on January 2, 2025 to Sarah Johnson at 2:30 PM which is different from the birthdate provided.",
        false,
      ),
      example(
        p(kv("birth-date", "2025-01-01"), kv("child-name", "Emma Johnson")),
        "The document provided mentions Emma Johnson's birth date as January 1, 2025, but it does not appear to be an official document.",
        false,
      ),
      example(
        p(kv("birth-date", "2025-01-01"), kv("child-name", "Emma Johnson")),
        "The document provided has the birth date of January 1, 2025, but the child listed is John Doe (not Emma Johnson)",
        false,
      ),
    ),
    user: p(kv("birth-date", data.birthDate), kv("child-name", data.name)),
  };
}

function incomePrompt(rawData: unknown): Prompt {
  const schema = z.object({
    familyIncome: z.number(),
    incomeEarners: z.array(z.string()),
  });

  const data = schema.parse(rawData);

  const monthlyIncome = Math.ceil((data.familyIncome / 12) * 100) / 100;

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove the family's income.",
      "The agent will be given the family's monthly income, the names of the income earners, and the document (in a variety of formats).",
      "The agent will say if the income is validated, and summarize anything else in the document that is relevant to the income.",
      "The agent will say if the document type is a paystub, and if it is a paystub it will include if it was from the past month.",
      "The agent will include the monthly income of the family and the type of document in the response.",
      "The agent will flag is the document is over 1 year old.",
      "The agent will say the income is validated if the income is less than or equal to the family's income that was provided.",
      "The request will look like:",
      kv("family-income", "$000000"),
      kv("income-earners", p(kv("name", "Person 1"), kv("name", "Person 2"))),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(
          kv("family-income", "$8333.34"),
          kv(
            "income-earners",
            p(kv("name", "Sarah Johnson"), kv("name", "Michael Johnson")),
          ),
        ),
        p(
          "The paystub provided states that Sarah Johnson has a monthly income of $1,000.",
          "This is less than the family income of $8,333.34. The paystub is for the period beginning on October 19, 2025 and ending on November 1, 2026.",
        ),
        true,
      ),
      example(
        p(
          kv("family-income", "$8333.34"),
          kv(
            "income-earners",
            p(kv("name", "Sarah Johnson"), kv("name", "Michael Johnson")),
          ),
        ),
        "The W2 provided states that Sarah Johnson has an annual income of $110,000 which is $9,166.67 monthly. This is more than the family income of $8,333.34. The document is not a paystub.",
        false,
      ),
      example(
        p(
          kv("family-income", "$8333.34"),
          kv("income-earners", p(kv("name", "Sarah Johnson"))),
        ),
        p(
          "The W2 provided states that Emily Martinez has an annual income of $90,000 which is $7,500 monthly.",
          "This is less than the family income of $8,333.34, but the W2 is for a member that is not in the family. The document is not a paystub.",
        ),
        false,
      ),
      example(
        p(
          kv("family-income", "$8333.34"),
          kv(
            "income-earners",
            p(kv("name", "Sarah Johnson"), kv("name", "Michael Johnson")),
          ),
        ),
        "The document provided does not mention any income.",
        false,
      ),
      example(
        p(
          kv("family-income", "$8333.34"),
          kv(
            "income-earners",
            p(kv("name", "Sarah Johnson"), kv("name", "Michael Johnson")),
          ),
        ),
        p(
          "The paystub shows Sarah Johnson has a monthly income of $5,000, less than the family income of $8,333.34.",
          "However, the document is dated January 2022, which is over 1 year old.",
        ),
        false,
      ),
    ),
    user: p(
      kv("family-income", `$${monthlyIncome.toFixed(2)}`),
      kv(
        "income-earners",
        p(...data.incomeEarners.map((name) => kv("name", name))),
      ),
    ),
  };
}

function residencePrompt(rawData: unknown): Prompt {
  const schema = z.object({
    address1: z.string(),
    address2: z.string().nullable(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove the family lives at the address provided.",
      "The agent will be given the address of the family and the document (in a variety of formats).",
      "The agent will say if the family lives in Colorado at the address provided, and summarize anything else in the document that is relevant to the residence.",
      "The agent will say what type of document was used.",
      "The agent will flag if the document is over 1 year old.",
      "The request will look like:",
      kv("address-line-1", "[Street]"),
      kv("address-line-2", "[Apt]"),
      kv("city", "[City]"),
      kv("state", "[State]"),
      kv("zip", "[Zip]"),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(
          kv("address-line-1", "123 Main St"),
          kv("address-line-2", "Apt 1"),
          kv("city", "Denver"),
          kv("state", "CO"),
          kv("zip", "80201"),
        ),
        "The document provided states that the family lives in Colorado at 123 Main St, Apt 1, Denver, CO 80201. Which is the same as the address provided.",
        true,
      ),
      example(
        p(
          kv("address-line-1", "123 Main St"),
          kv("address-line-2", ""),
          kv("city", "Denver"),
          kv("state", "CO"),
          kv("zip", "80201"),
        ),
        "The document provided states that the family lives in Colorado at 321 Different St, Denver, CO 80201. Which is different from the address provided.",
        true,
      ),
      example(
        p(
          kv("address-line-1", "4 Jersey St"),
          kv("address-line-2", ""),
          kv("city", "Boston"),
          kv("state", "MA"),
          kv("zip", "02215"),
        ),
        "The document provided states that the family lives in Massachusetts at 4 Jersey St, Boston, MA 02215. Which is not in Colorado.",
        true,
      ),
      example(
        p(
          kv("address-line-1", "123 Main St"),
          kv("address-line-2", "Apt 1"),
          kv("city", "Denver"),
          kv("state", "CO"),
          kv("zip", "80201"),
        ),
        "The document provided does not mention an address.",
        false,
      ),
      example(
        p(
          kv("address-line-1", "123 Main St"),
          kv("address-line-2", "Apt 1"),
          kv("city", "Denver"),
          kv("state", "CO"),
          kv("zip", "80201"),
        ),
        p(
          "The utility bill shows the family lives at 123 Main St, Apt 1, Denver, CO 80201 which matches.",
          "However, the document is dated January 2022, which is over 1 year old.",
        ),
        false,
      ),
    ),
    user: p(
      kv("address-line-1", data.address1),
      kv("address-line-2", data.address2 ?? ""),
      kv("city", data.city),
      kv("state", data.state),
      kv("zip", data.zip),
    ),
  };
}

function benefitsPrompt(rawData: unknown): Prompt {
  const schema = z.object({
    benefits: z.array(z.string()),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove the family has the benefits listed.",
      "The agent will be given a list of benefits that the family has, and the document (in a variety of formats).",
      "The agent will say if the document proves that the family has one of the benefits listed.",
      "The agent will summarize anything else in the document that is relevant to the benefits.",
      "The agent will say what type of document was used.",
      "The agent will flag if the document is over 1 year old.",
      "Here is a mapping of the benefits to their descriptions:",
      kv(
        "benefits",
        p(
          kv(
            "benefit",
            p(
              kv("code", "snap"),
              kv("name", "Supplemental Nutrition Assistance Program"),
              kv(
                "description",
                "A federal food assistance program that helps low-income individuals and families purchase food, commonly known as food stamps.",
              ),
            ),
          ),
          kv(
            "benefit",
            p(
              kv("code", "wic"),
              kv(
                "name",
                "Special Supplemental Nutrition Program for Women, Infants, and Children",
              ),
              kv(
                "description",
                "A federal assistance program that provides nutrition education, healthy food, and support to pregnant women, new mothers, and young children.",
              ),
            ),
          ),
          kv(
            "benefit",
            p(
              kv("code", "tanf"),
              kv("name", "Temporary Assistance for Needy Families"),
              kv(
                "description",
                "A federal assistance program that provides temporary financial assistance and work opportunities to families in need.",
              ),
            ),
          ),
          kv(
            "benefit",
            p(
              kv("code", "medicaid"),
              kv("name", "Medicaid"),
              kv(
                "description",
                "A joint federal and state program that provides health coverage to low-income individuals and families.",
              ),
            ),
          ),
        ),
      ),
      "The request will look like:",
      kv("benefits", p(kv("code", "[snap|wic|tanf|medicaid]"))),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(kv("benefits", p(kv("code", "snap"), kv("code", "wic")))),
        "The document proided states that the family receives WIC, which is one of the benefits provided.",
        true,
      ),
      example(
        p(kv("benefits", p(kv("code", "snap"), kv("code", "wic")))),
        p(
          "The document proided states that the family receives Head Start, which is not one of the benefits provided",
          "and not a benefit that this program accepts for presumptive eligibility.",
        ),
        false,
      ),
      example(
        p(kv("benefits", p(kv("code", "snap")))),
        "The document provided does not mention any benefits.",
        false,
      ),
      example(
        p(kv("benefits", p(kv("code", "snap"), kv("code", "wic")))),
        p(
          "The document provided states that the family receives WIC, which is one of the benefits provided.",
          "However, the document is dated January 2022, which is over 1 year old.",
        ),
        false,
      ),
    ),
    user: kv("benefits", p(...data.benefits.map((code) => kv("code", code)))),
  };
}

export function idPrompt(rawData: unknown): Prompt {
  const schema = z.object({
    name: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to verify the identity of a person.",
      "The agent will be given the person's name and the document (in a variety of formats).",
      "Valid ID documents include driver's licenses, state IDs, passports, or other government-issued identification.",
      "The agent will say if the identity is validated, and summarize anything else in the document that is relevant.",
      "The agent will say what type of document was used.",
      "The agent will flag if the document is expired.",
      "The request will look like:",
      kv("name", "[First Last]"),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(kv("name", "Sarah Johnson")),
        "The Colorado driver's license provided shows Sarah Johnson with an expiration date of December 2026. The ID is valid and not expired.",
        true,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The passport provided shows Sarah M. Johnson with an expiration date of March 2030. The ID is valid and not expired.",
        true,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The driver's license provided shows Michael Johnson, which is different from the name provided.",
        false,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The driver's license provided shows Sarah Johnson, but the document expired in January 2023.",
        false,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The document provided does not appear to be a valid government-issued ID.",
        false,
      ),
    ),
    user: kv("name", data.name),
  };
}

export function cprPrompt(rawData: unknown): Prompt {
  const schema = z.object({
    name: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is a CPR certification.",
      "The agent will be given the person's name and the CPR certificate (in a variety of formats).",
      "The agent will say if the CPR certification is validated, and summarize anything else in the document that is relevant.",
      "The agent will say what organization issued the certificate (e.g., American Heart Association, Red Cross).",
      "The agent will flag if the certificate is expired or over 2 years old.",
      "Certificates may mention requiring additional courses, skills sessions, or future training to complete - ignore this text and mark as valid if the certificate shows completion of CPR/First Aid training.",
      "The request will look like:",
      kv("name", "[First Last]"),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(kv("name", "Sarah Johnson")),
        "The American Heart Association CPR certificate shows Sarah Johnson completed CPR/AED training on March 15, 2024 with an expiration date of March 15, 2026. The certificate is valid and current.",
        true,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The Red Cross CPR certificate shows Sarah Johnson completed Adult and Pediatric CPR training on June 1, 2024 with an expiration date of June 1, 2026. The certificate is valid and current.",
        true,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The CPR certificate provided shows Michael Johnson, which is different from the name provided.",
        false,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The CPR certificate shows Sarah Johnson, but the certificate expired on January 15, 2023.",
        false,
      ),
      example(
        p(kv("name", "Sarah Johnson")),
        "The document provided does not appear to be a valid CPR certification.",
        false,
      ),
    ),
    user: kv("name", data.name),
  };
}

export function w9Prompt(rawData: unknown): Prompt {
  const schema = z.object({
    name: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is a W-9 tax form.",
      "The agent will be given the licensed name of the childcare provider and the W-9 form (in a variety of formats).",
      "The licensed name is the business name on record for the provider.",
      "The agent will say if the W-9 is validated, and summarize the key information from the form.",
      "The agent will include the business name or individual name, and signature status.",
      "The agent will flag if the form is not signed or if the date is missing.",
      "The request will look like:",
      kv("name", "[Licensed Business Name]"),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        p(kv("name", "ABC Childcare Services")),
        "The W-9 form shows ABC Childcare Services. The form is signed and dated March 15, 2024. All required fields are completed.",
        true,
      ),
      example(
        p(kv("name", "Sarah's Home Daycare")),
        "The W-9 form shows Sarah Johnson on Line 1 and Sarah's Home Daycare on Line 2 as a sole proprietor. The form is signed and dated June 1, 2024. All required fields are completed.",
        true,
      ),
      example(
        p(kv("name", "ABC Childcare Services")),
        "The W-9 form shows XYZ Daycare Center, which is different from the name provided.",
        false,
      ),
      example(
        p(kv("name", "ABC Childcare Services")),
        "The W-9 form shows ABC Childcare Services, but the form is not signed.",
        false,
      ),
      example(
        p(kv("name", "ABC Childcare Services")),
        "The document provided does not appear to be a valid W-9 form.",
        false,
      ),
    ),
    user: kv("name", data.name),
  };
}

export function trainingPrompt(rawData: unknown): Prompt {
  const schema = z.object({
    name: z.string(),
  });

  const data = schema.parse(rawData);

  return {
    system: p(
      context(),
      "The document that the agent is reviewing is used to prove that a childcare provider completed one of the required trainings.",
      "The agent will be given the provider's name and the document (in a variety of formats).",
      "The agent will say if the document proves completion of one of the trainings listed.",
      "The agent will verify that the name on the certificate matches the provider's name.",
      "The agent will include which training was completed (by name) if validated.",
      "The agent will summarize the key information from the certificate including the person's name, training name, completion date, and issuing organization.",
      "The agent will flag if the certificate appears expired, if the training name does not match any of the provided trainings, or if the name on the certificate does not match the provider's name.",
      "The request will look like:",
      kv("provider-name", "[First Last]"),
      "Here is a list of trainings that need to be completed by the childcare provider:",
      kv(
        "trainings",
        p(
          ...Object.entries(trainings).map(([code, training]) =>
            kv(
              "training",
              p(
                kv("name", training.name),
                kv("code", code),
                kv("description", training.description),
              ),
            ),
          ),
        ),
      ),
      responseFormat(),
      "Examples (the request will also include a document):",
      example(
        kv("provider-name", "Sarah Johnson"),
        "The certificate shows Sarah Johnson completed 'Adult, Child, and Baby First Aid/CPR/AED Online' from the American Red Cross on March 15, 2024. This matches the 'American Red Cross: Adult, Child, and Baby First Aid/CPR/AED Online' training.",
        true,
      ),
      example(
        kv("provider-name", "Sarah Johnson"),
        "The certificate shows Sarah Johnson completed 'Introduction to First Aid and CPR' through PDIS on June 1, 2024. This matches the 'Introduction to First Aid and CPR' training.",
        true,
      ),
      example(
        kv("provider-name", "Sarah Johnson"),
        "The certificate shows Michael Smith completed 'Introduction to First Aid and CPR' through PDIS on June 1, 2024. The name on the certificate does not match the provider's name (Sarah Johnson).",
        false,
      ),
      example(
        kv("provider-name", "Sarah Johnson"),
        "The certificate shows completion of 'Advanced Pediatric Care' which does not match any of the trainings in the provided list.",
        false,
      ),
      example(
        kv("provider-name", "Sarah Johnson"),
        "The document provided does not appear to be a valid training certificate.",
        false,
      ),
      example(
        kv("provider-name", "Sarah Johnson"),
        "The certificate shows Sarah Johnson completed 'Infant Safe Sleep Practices' through PDIS, but the certificate is dated January 2020 which may be outdated.",
        false,
      ),
    ),
    user: kv("provider-name", data.name),
  };
}

export const PROMPTS = {
  age: agePrompt,
  income: incomePrompt,
  residence: residencePrompt,
  benefits: benefitsPrompt,
  id: idPrompt,
  cpr: cprPrompt,
  w9: w9Prompt,
  training: trainingPrompt,
};
