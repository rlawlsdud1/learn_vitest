import { describe, test, expect } from "vitest";
import { waitForCheckNumberIsOne } from "./wait-for-check-number-is-one";

describe("waitForCheckNumberIsOne", () => {
  test("not a number !!> error", async () => {
    const target = "1";

    // undefined: 모든 에러 가능
    await expect(() => waitForCheckNumberIsOne(target)).rejects.toThrow();

    // 문자열 or regExp: error 메세지가 일치해야함
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(/should/);

    // class 생성자: 자신이거나, 부모여야 한다.
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(TypeError);

    // error instance: 같은 에러면서, 메세지도 같아야 한다.
    // expect(() => waitForCheckNumberIsOne(target)).toThrow(
    //   new Error("should be a number")
    // );
  });
});
