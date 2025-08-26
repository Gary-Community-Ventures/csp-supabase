export class Mapping<I, T> {
  constructor(
    private key: string,
    private parser: (initial: I) => T,
    private isType: (initial: unknown) => initial is I,
  ) {}

  get(data: { [key: string]: unknown }): T {
    const value = data[this.key];

    if (!this.isType(value)) {
      throw new Error(`Invalid type for ${this.key}`);
    }

    return this.parser(value);
  }
}
