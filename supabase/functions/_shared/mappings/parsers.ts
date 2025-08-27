import { Json } from "../types/supabase.ts";
import { Table } from "./isType.ts";

export function noChangeParser<T>(value: T): T {
  return value;
}

export function stringOrNullParser(value: string): string | null {
  return value === "" ? null : value;
}

export function yesNoParser(value: string): boolean | null {
  if (value === "") {
    return null;
  }

  return value === "Yes";
}

export function acceptParser(value: string): boolean | null {
  if (value === "") {
    return null;
  }

  return value === "Accept";
}

export function acceptedParser(value: string): boolean | null {
  if (value === "") {
    return null;
  }

  return value === "Accepted";
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
  return (value: string): { [key: string]: boolean } | null => {
    if (value === "") {
      return null;
    }

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
  return (value: string[] | ""): { [key: string]: boolean } | null => {
    if (value === "") {
      return null;
    }

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
}): Date | null {
  if (value.year === "" || value.month === "" || value.day === "") {
    return null;
  }

  return new Date(
    Number(value.year),
    Number(value.month) - 1,
    Number(value.day),
  );
}

export function phoneNumberParser(value: { full: string }): string {
  return value.full.replaceAll(/\D/g, "");
}

export function jsonParser(value: string): Json | null {
  if (value === "") {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function tableParser(questionCount: number) {
  return (value: Table): (string | null)[] => {
    const values: (string | null)[] = [];

    for (const [k, v] of Object.entries(value)) {
      if (k === "colIds" || k === "rowIds") {
        continue;
      }

      if (Array.isArray(v)) {
        values.push(v[0]);
        continue;
      }

      values.push(Object.values(v)[0]);
    }

    while (values.length < questionCount) {
      values.push(null);
    }

    return values;
  };
}
