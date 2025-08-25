import { isObject, isString } from "./isType.ts";

export class Mapping<I, T> {
  constructor(
    private key: string,
    private parser: (initial: I) => T,
    private isType: (initial: unknown) => initial is I,
  ) {}

  getValue(data: { [key: string]: unknown }): T {
    const value = data[this.key];

    if (!this.isType(value)) {
      throw new Error("Invalid type");
    }

    return this.parser(value);
  }
}
