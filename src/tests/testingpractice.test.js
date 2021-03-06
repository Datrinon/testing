import { capitalize } from "../capitalize";
import { reverseString } from "../reverseString";
import { calculator } from "../calculator";
import { caesarcipher } from "../caesar";
import { analyze } from "../analyze";

it("Capitalize phrase #1", () => {
  expect(capitalize("snake")).toBe("Snake");
});

it("Capitalize phrase #2", () => {
  expect(capitalize("hello, world!")).toBe("Hello, world!");
})

it("Capitalize phrase #3", () => {
  expect(capitalize("i have a dream...")).toBe("I have a dream...");
})

it("Reverse string #1", () => {
  expect(reverseString("Good friend.")).toBe(".dneirf dooG");
})

it("Reverse string #2", () => {
  expect(reverseString("Hello and goodbye.")).toBe(".eybdoog dna olleH");
})

it("Reverse string #3", () => {
  expect(reverseString("Wort wort wort.")).toBe(".trow trow troW");
})

it("Calculator addition", () => {
  expect(calculator.add(3, 5)).toBe(8);
})

it("Calculator subtraction", () => {
  expect(calculator.sub(1, 5)).toBe(-4);
})

it("Calculator multiplication", () => {
  expect(calculator.mul(5, 5)).toBe(25);
})

it("Calculator integer division", () => {
  expect(calculator.div(14, 2)).toBe(7);
})

it("Calculator float division", () => {
  expect(calculator.div(3.3, 3)).toBeCloseTo(1.1);
})

it("Caesar Cipher: Alphabet", () => {
  expect(caesarcipher("abcdefghijklmnopqrstuvwxyz", 1))
      .toBe("bcdefghijklmnopqrstuvwxyza")
});

it("Caesar Cipher: Phrases #1", () => {
  expect(caesarcipher("attack at dawn", 1))
      .toBe("buubdl bu ebxo")
});

it("Caesar Cipher: Phrases with punctuation #1", () => {
  expect(caesarcipher("please don't leave me, now.", 13))
      .toBe("cyrnfr qba'g yrnir zr, abj.")
});

it("Caesar Cipher: Phrases with numbers.", () => {
  expect(caesarcipher("prisoner #109-321409239-1293, step forward!!", 13))
      .toBe("cevfbare #109-321409239-1293, fgrc sbejneq!!")
});

it("Caesar Cipher: Cases are maintained.", () => {
  expect(caesarcipher("You make my Earth quake / Ohh, you make my Earth quake.", 13))
      .toBe("Lbh znxr zl Rnegu dhnxr / Buu, lbh znxr zl Rnegu dhnxr.")
});

it("Caesar Cipher: Offset of 0.", () => {
  expect(caesarcipher("You make my Earth quake / Ohh, you make my Earth quake.", 0))
      .toBe("You make my Earth quake / Ohh, you make my Earth quake.")
});

it("Caesar Cipher: Offset of 0.", () => {
  expect(caesarcipher("You make my Earth quake / Ohh, you make my Earth quake.", 0))
      .toBe("You make my Earth quake / Ohh, you make my Earth quake.")
});

it("Array Analysis: Empty Array.", () => {
  expect(analyze([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0
  })
});

it("Array Analysis: One Element.", () => {
  expect(analyze([10])).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1
  })
});

it("Array Analysis: Standard Case #1.", () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
});

it("Array Analysis: Standard Case #2.", () => {
  expect(analyze([5,5,5,5,5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 5
  })
});

it("Array Analysis: Standard Case #3.", () => {
  expect(analyze([5,4,2,2,0,5])).toEqual({
    average: 3,
    min: 0,
    max: 5,
    length: 6
  })
});