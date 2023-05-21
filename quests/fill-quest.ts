import { randomInteger, shuffle } from "~/utils/random";

export class FillQuest {
  public static createSumQuest(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 9);
    const number2 = randomInteger(1, 9);

    calculation.push(number1.toString());
    calculation.push("+");
    calculation.push(number2.toString());
    calculation.push("=");
    calculation.push("x");

    return new FillQuest(calculation.join(" "), number1 + number2);
  }

  public static create3PartSumQuest(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 6);
    const number2 = randomInteger(1, 7);
    const number3 = randomInteger(1, 6);

    calculation.push(number1.toString());
    calculation.push("+");
    calculation.push(number2.toString());
    calculation.push("+");
    calculation.push(number3.toString());
    calculation.push("=");
    calculation.push("x");

    return new FillQuest(calculation.join(" "), number1 + number2 + number3);
  }

  public static create3PartSumQuestWithXInBetween(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 5);
    const number2 = randomInteger(1, 5);
    const number3 = randomInteger(10, 13);

    const leftSide = shuffle([number1.toString(), number2.toString(), "x"]);

    calculation.push(leftSide[0]);
    calculation.push("+");
    calculation.push(leftSide[1]);
    calculation.push("+");
    calculation.push(leftSide[2]);
    calculation.push("=");
    calculation.push(number3.toString());

    return new FillQuest(calculation.join(" "), number3 - number2 - number1);
  }

  static createSubtraction() {
    const calculation: string[] = [];

    const number1 = randomInteger(8, 15);
    const number2 = randomInteger(1, 8);

    calculation.push(number1.toString());
    calculation.push("-");
    calculation.push(number2.toString());
    calculation.push("=");
    calculation.push("x");

    return new FillQuest(calculation.join(" "), number1 - number2);
  }

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
