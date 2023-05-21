export type PartType =
  | {
      type: "string";
      value: string;
    }
  | {
      type: "variable";
      name: string;
    };

export class SumGame {
  public constructor(private calculation: string, private solution: number) {}

  public getCalculation(): string {
    return this.calculation;
  }

  public getSolution(): number {
    return this.solution;
  }

  public getParts(): SumGamePart[] {
    return this.calculation.split(" ").map((part): SumGamePart => {
      if (part === "x") {
        return new SumGamePart("variable", part, null);
      }

      return new SumGamePart("string", null, part);
    });
  }

  public verify(input: string | number) {
    const inputNumber = typeof input === "number" ? input : parseInt(input);
    return inputNumber === this.solution;
  }
}

export class SumGamePart {
  public constructor(
    private type: string,
    private name: string | null,
    private value: string | null
  ) {}

  public getType() {
    return this.type;
  }

  public getName() {
    return this.name;
  }

  public getValue() {
    return this.value;
  }

  public getIdentifier() {
    return `${this.type}::${this.name || "no-name"}::${
      this.value || "no-value"
    }`;
  }
}
