const { register } = require("../apps/controllers/dangnhap/signup");

describe("Register function", () => {
  test("Register with correct information should return success", () => {
    const user = {
      username: "user1",
      email: "datphan123@gmail.com",
      password: "123",
    };
    const result = register(user);
    expect(result.success).toBeTruthy();
  });

  test("Register with existing username should return error", () => {
    const user = {
      username: "user1",
      email: "admin@gmail.com",
      password: "123",
    };
    const result = register(user);
    expect(result.error).toBe("Username is already taken");
  });
});
