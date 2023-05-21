import { randomInteger, shuffle } from "~/utils/random";

const MINUS = "&minus;";
const PLUS = "+";
const EQUALS = "=";
const X = "x";

export class FillQuest {
  public static createSumQuest(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 9);
    const number2 = randomInteger(1, 9);

    calculation.push(number1.toString());
    calculation.push(PLUS);
    calculation.push(number2.toString());
    calculation.push(EQUALS);
    calculation.push(X);

    return new FillQuest(calculation.join(" "), number1 + number2);
  }

  public static create3PartSumQuest(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 6);
    const number2 = randomInteger(1, 7);
    const number3 = randomInteger(1, 6);

    calculation.push(number1.toString());
    calculation.push(PLUS);
    calculation.push(number2.toString());
    calculation.push(PLUS);
    calculation.push(number3.toString());
    calculation.push(EQUALS);
    calculation.push(X);

    return new FillQuest(calculation.join(" "), number1 + number2 + number3);
  }

  public static create3PartSumQuestWithXInBetween(): FillQuest {
    const calculation: string[] = [];

    const number1 = randomInteger(1, 5);
    const number2 = randomInteger(1, 5);
    const number3 = randomInteger(10, 13);

    const leftSide = shuffle([number1.toString(), number2.toString(), "x"]);

    calculation.push(leftSide[0]);
    calculation.push(PLUS);
    calculation.push(leftSide[1]);
    calculation.push(PLUS);
    calculation.push(leftSide[2]);
    calculation.push(EQUALS);
    calculation.push(number3.toString());

    return new FillQuest(calculation.join(" "), number3 - number2 - number1);
  }

  static createSubtraction() {
    const calculation: string[] = [];

    const number1 = randomInteger(8, 15);
    const number2 = randomInteger(1, 8);

    calculation.push(number1.toString());
    calculation.push(MINUS);
    calculation.push(number2.toString());
    calculation.push(EQUALS);
    calculation.push(X);

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
      if (part === X) {
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

  public isSymbol() {
    return [PLUS, MINUS, X, EQUALS].includes(this.value || "");
  }

  public getIdentifier() {
    return `${this.type}::${this.name || "no-name"}::${
      this.value || "no-value"
    }`;
  }
}
