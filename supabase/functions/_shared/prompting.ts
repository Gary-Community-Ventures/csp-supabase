export type Prompt = {
  system: string;
  user: string;
};
export function p(...lines: string[]) {
  return lines.join("\n");
}
export function kv(key: string, value: string) {
  return `<${key}>${value}</${key}>`;
}
export function context() {
  return p(
    "The agent is an assistant for a child care subsidy pilot called Childcare Affordability Pilot (CAP).",
    "The agents job is to review documents and answer questions about them.",
    `Today's date is ${new Date().toDateString()}.`,
    "The program is based in Colorado, USA.",
  );
}
