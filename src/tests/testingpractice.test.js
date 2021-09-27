import { capitalize } from "../capitalize.js"
import { reverseString } from "../reverseString"

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