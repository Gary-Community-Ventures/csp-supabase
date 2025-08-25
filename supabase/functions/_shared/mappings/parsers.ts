export function noChangeParser<T>(value: T): T {
  return value;
}

export function stringOrNullParser(value: string): string | null {
  return value === "" ? null : value;
}

export function yesNoParser(value: string): boolean {
  return value === "Yes";
}

export function acceptParser(value: string): boolean {
  return value === "Accept";
}

export function numberOrNullParser(value: string): number | null {
  return value === "" ? null : Number(value);
}

export function remapParser(map: Record<string, string> = {}) {
  return (value: string) => {
    return map[value];
  };
}

export function checkboxesParser(map: Record<string, string> = {}) {
  return (value: string): { [key: string]: boolean } => {
    const parts = value.split("\r\n");

    return parts.reduce(
      (acc, part) => {
        const [checked, key] = part.split(": ", 2);

        acc[map[key] ?? key] = checked === "CHECKED";

        return acc;
      },
      {} as { [key: string]: boolean },
    );
  };
}

export function arrayCheckboxesParser(map: Record<string, string> ={}) {
  return (value: string[]): { [key: string]: boolean } => {
    const values = Object.values(map).reduce(
      (acc, key) => {
        acc[key] = false;

        return acc;
      },
      {} as { [key: string]: boolean },
    );

    for (const part of value) {
      values[map[part] ?? part] = true;
    }

    return values;
  };
}

export function birthdateParser(value: {
  year: string;
  month: string;
  day: string;
}): Date {
  if (value.year === "" || value.month === "" || value.day === "") {
    return null;
  }

  return new Date(
    Number(value.year),
    Number(value.month) - 1,
    Number(value.day),
  );
}

export const remapLangageParser = remapParser({
  English: "en",
  Español: "es",
  አማርኛ: "am",
  عربي: "ar",
  中文: "zh",
  Français: "fr",
  Deutsch: "de",
  हिंदी: "hi",
  한국인: "ko",
  Русский: "ru",
  "Tiếng Việt": "vi",
});

export const demographicsParser = checkboxesParser({
  "American Indian or Alaska Native": "americanIndianOrAlaskaNative",
  Asian: "asian",
  "Black or African American": "blackOrAfricanAmerican",
  "Hispanic or Latino": "hispanicOrLatino",
  "Middle Eastern or North African": "middleEasternOrNorthAfrican",
  "Native Hawaiian or Pacific Islander": "nativeHawaiianOrPacificIslander",
  White: "white",
  Other: "other",
});

export const phoneNumberParser = (value: { full: string }): string => {
  return value.full.replaceAll(/\D/g, "");
};

export const remapIncomeFrequencyParser = remapParser({
  "By Month": "monthly",
  "By Year": "yearly",
});

export const currentProgramsParser = arrayCheckboxesParser({
  "Colorado Child Care Assistance Program (CCCAP)": "cccap",
  "Head Start / Early Head Start": "head_start",
  "Denver Preschool Program (DPP)": "dpp",
  "Universal Preschool (UPK)": "upk",
  None: "none",
});

export const whyNeedChildCareParser = checkboxesParser({
  "Parent/guardian(s) are working": "working",
  "Parent/guardian(s) are enrolled in school or job training":
    "school_or_job_training",
  "Parent/guardian(s) are actively looking for work": "looking_for_work",
  Other: "other",
});

export const typeOfCareParser = checkboxesParser({
  "Licensed Center": "licensed_center",
  "Licensed Home-Based Care": "licensed_home_based",
  "Family, Friend, or Neighbor (FFN)": "ffn",
  "Preschool at a school in my school district": "preschool",
  Other: "other",
});

export const satisfactionRemap = remapParser({
  "Very Satisfied": "very_satisfied",
  Satisfied: "satisfied",
  "Slightly Satisfied": "slightly_satisfied",
  Neutral: "neutral",
  "Slightly Dissatisfied": "slightly_dissatisfied",
  Dissatisfied: "dissatisfied",
  "Very Dissatisfied": "very_dissatisfied",
});

export const childCareNeedsRemap = remapParser({
  "Occasional (less than 15 hours/week)": "ocassional",
  "Part-Time (15 - 24 hours/week)": "part_time",
  "Full-Time (25 hours/week or more)": "full_time",
});

export const childCarePeriodRemap = remapParser({
  "Less than 9 months": "less_than_9_months",
  "9 months or more": "more_than_9_months",
});

export const childLanguageParser = checkboxesParser({
  "English": "en",
  "Spanish": "es",
  "Amharic": "am",
  "Arabic": "ar",
  "Chinese (Mandarin or Cantonese)": "zh",
  "French": "fr",
  "German": "de",
  "Hindi": "hi",
  "Korean": "ko",
  "Russian": "ru",
  "Vietnamese": "vi",
  "Other": "other",
}):

export const currentBenefitProgramsParser = arrayCheckboxesParser({
  "Health First Colorado (Medicaid)": "medicaid",
  "Colorado Works (TANF)": "tanf",
  "SNAP (food assistance)": "snap",
  "WIC (food assistance for women and children)": "wic",
  "No, I do not participate in any of the above programs": "none",
});
