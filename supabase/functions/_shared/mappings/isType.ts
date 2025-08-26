export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isObject<T extends string, V extends Record<T, string>>(
  keys: T[],
) {
  return (value: unknown): value is V => {
    if (typeof value !== "object" || value === null) {
      return false;
    }

    const keysSet = new Set<string>(keys);

    if (!Object.keys(value).every((key) => keysSet.has(key))) {
      return false;
    }

    return Object.values(value).every((value) => {
      return typeof value === "string";
    });
  };
}

export function isArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) {
    return false;
  }

  return value.every((value) => typeof value === "string");
}

export function isArrayOrEmptyString(value: unknown): value is string[] | "" {
  if (value === "") {
    return true;
  }

  if (!Array.isArray(value)) {
    return false;
  }

  return value.every((value) => typeof value === "string");
}
