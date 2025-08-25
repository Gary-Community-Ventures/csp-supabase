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

export function arrayCheckboxesParser(map: Record<string, string> = {}) {
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

export const phoneNumberParser = (value: { full: string }): string => {
  return value.full.replaceAll(/\D/g, "");
};
