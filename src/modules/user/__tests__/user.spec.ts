import { connect } from "mongoose";
import supertest from "supertest";
import app from "~/app";
import { MONGO_TEST } from "~/config";
import { User } from "..";

const request = supertest(app);
connect(MONGO_TEST);

describe("User module testing", () => {
  beforeEach(() => User.model.remove({}));
  afterAll(() => User.model.remove({}));

  it("should return 400 invalid email for /register", async () => {
    const register = await request.post("/register").send({
      email: "jestjestjest",
      password: "1234",
      name: "Jest",
      birthDate: new Date().toISOString(),
      picture: "",
    });

    expect(register.status).toBe(400);
    expect(register.body.errors[0]).toBe("Invalid email");
  });

  it("should return 400 if the user does not pass the required fields for /register", async () => {
    const register = await request.post("/register");

    expect(register.status).toBe(400);
    expect(register.body.errors).toStrictEqual([
      "Email is a required field",
      "Password is a required field",
      "Birth date is a required field ",
      "Name is a required field",
    ]);
  });

  it("should return 400 if the user does not pass the required fields for /login", async () => {
    const login = await request.post("/login");

    expect(login.status).toBe(400);
    expect(login.body.errors).toStrictEqual([
      "Email is a required field",
      "Password is a required field",
    ]);
  });

  it("should return 400 with invalid email for /login", async () => {
    const login = await request.post("/login").send({
      email: "jestjestjest",
      password: "1234",
    });

    expect(login.status).toBe(400);
    expect(login.body.errors[0]).toBe("Invalid email");
  });

  it("should throw an 401 if the user does not pass the authorization header for /me", async () => {
    const meResponse = await request.get("/me");
    expect(meResponse.status).toBe(401);
    expect(meResponse.body.message).toBe("Not Authorized");
  });

  it("should throw an 401 if the user pass the authorization token invalid for /me", async () => {
    const meResponse = await request.get("/me").set({
      authorization: "Invalid Token",
    });
    expect(meResponse.status).toBe(401);
    expect(meResponse.body.message).toBe("Invalid Token");
  });

  it("Testing passing the register without the fields", async () => {
    const login = await request.post("/login");

    expect(login.status).toBe(400);
    expect(login.body.errors).toStrictEqual([
      "Email is a required field",
      "Password is a required field",
    ]);
  });

  it("Testing the register flow for the user", async () => {
    const responseRegister = await request.post("/register").send({
      email: "jest@test.io",
      password: "1234",
      name: "Jest",
      birthDate: new Date().toISOString(),
      picture: "",
    });

    expect(responseRegister.status).toBe(200);

    const token = responseRegister.body.token;
    const responseMe = await request.get("/me").set({
      authorization: token,
    });

    expect(responseMe.status).toBe(200);
    expect(responseMe.body.name).toBe("Jest");
    expect(responseMe.body.password).toBeUndefined();
  });

  it("Testing the login flow for the user", async () => {
    const responseRegister = await request.post("/register").send({
      email: "jest@test.io",
      password: "1234",
      name: "Jest",
      birthDate: new Date().toISOString(),
      picture: "",
    });

    expect(responseRegister.status).toBe(200);

    const responseLogin = await request.post("/login").send({
      email: "jest@test.io",
      password: "1234",
    });

    expect(responseLogin.status).toBe(200);

    const token = responseLogin.body.token;
    const responseMe = await request.get("/me").set({
      authorization: token,
    });

    expect(responseMe.status).toBe(200);
    expect(responseMe.body.name).toBe("Jest");
    expect(responseMe.body.password).toBeUndefined();
  });
});
