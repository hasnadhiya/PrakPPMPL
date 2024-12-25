import { penambahan } from "./app.mjs";
import { expect } from "chai";

describe("Unit Testing", () => {
  it("should return correct sum for positive numbers", () => {
    const result = penambahan(5, 5);
    expect(result).to.equal(10);
  });

  it("should return correct sum for negative numbers", () => {
    const result = penambahan(-5, -5);
    expect(result).to.equal(-10);
  });

  it("should return correct sum for a positive and a negative number", () => {
    const result = penambahan(5, -3);
    expect(result).to.equal(2);
  });

  it("should return 0 when adding 0 to a number", () => {
    const result = penambahan(0, 5);
    expect(result).to.equal(5);
  });

  it("should return 0 when both numbers are 0", () => {
    const result = penambahan(0, 0);
    expect(result).to.equal(0);
  });

  it("should return the correct sum for large numbers", () => {
    const result = penambahan(1000000, 999999);
    expect(result).to.equal(1999999);
  });

  it("should return correct sum when one number is zero", () => {
    const result = penambahan(0, -10);
    expect(result).to.equal(-10);
  });
});
