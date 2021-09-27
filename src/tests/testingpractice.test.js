import { capitalize } from "../capitalize.js"

it("Capitalize phrase #1", () => {
  expect(capitalize("snake")).toBe("Snake");
});

it("Capitalize phrase #2", () => {
  expect(capitalize("hello, world!")).toBe("Hello, world!");
})

it("Capitalize phrase #3", () => {
  expect(capitalize("i have a dream...")).toBe("I have a dream...");
})
