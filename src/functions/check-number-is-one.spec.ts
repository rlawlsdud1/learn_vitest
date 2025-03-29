import { describe, test, expect } from "vitest";
import { checkNumberIsOne, TypeError } from "./check-number-is-one";

describe("checkNumberIsOne", () => {
  test("not a number !!> error", () => {
    const target = "1";

    // undefined: 모든 에러 가능
    // expect(() => checkNumberIsOne(target)).toThrow();

    // 문자열 or regExp: error 메세지가 일치해야함
    // expect(() => checkNumberIsOne(target)).toThrow(/should/);

    // class 생성자: 자신이거나, 부모여야 한다.
    // expect(() => checkNumberIsOne(target)).toThrow(TypeError);

    // error instance: 같은 에러면서, 메세지도 같아야 한다.
    expect(() => checkNumberIsOne(target)).toThrow(
      new Error("should be a number")
    );
  });

  test("not 1 -> false", () => {
    const target = 2;
    const result = checkNumberIsOne(target);
    expect(result).toEqual(false);
  });

  test("1 -> true", () => {
    const target = 1;
    const result = checkNumberIsOne(target);
    expect(result).toEqual(true);
  });
});
