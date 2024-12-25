import request from "supertest";
import app from "./app.mjs";
import { expect } from "chai";

describe("Integration Testing", () => {
  it("should return the correct sum for positive numbers", async () => {
    const data = { a: 5, b: 5 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("10");
  });

  it("should return the correct sum for negative numbers", async () => {
    const data = { a: -5, b: -5 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("-10");
  });

  it("should return the correct sum for a positive and negative number", async () => {
    const data = { a: 5, b: -3 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("2");
  });

  it("should return the correct sum when one number is zero", async () => {
    const data = { a: 0, b: 5 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("5");
  });

  it("should return 0 when both numbers are zero", async () => {
    const data = { a: 0, b: 0 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("0");
  });

  it("should return the correct sum for large numbers", async () => {
    const data = { a: 1000000, b: 999999 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("1999999");
  });

  it("should return correct sum when one number is negative and other is zero", async () => {
    const data = { a: 0, b: -10 };
    const res = await request(app).post("/").send(data);
    expect(res.statusCode).to.equal(200);
    expect(res.text).to.equal("-10");
  });

});
