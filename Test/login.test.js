import { login } from "../apps/controllers/dangnhap";
describe("Login function", () => {
  test("Should return true if username and password are correct", () => {
    const result = login("email", "password");
    expect(result).toBeTruthy();
  });

  test("Should throw an error if username is missing", () => {
    expect(() => {
      login(undefined, "password");
    }).toThrowError("email is required");
  });

  test("Should throw an error if password is missing", () => {
    expect(() => {
      login("email", undefined);
    }).toThrowError("Password is required");
  });

  test("Should throw an error if username and password are incorrect", () => {
    expect(() => {
      login("invalidUsername", "invalidPassword");
    }).toThrowError("Invalid username or password");
  });
});
