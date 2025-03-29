import { describe, test } from "vitest";

describe("suite 1", () => {
  test.skip("1", () => {});
  // 자주 돌리기 어려운 테스트 (ex. 결제)의 경우 skip 사용

  test("2", () => {});

  test.todo("3", () => {});
  // skip 과 유사하나, 아직 구현이 덜 됨을 알림

  test.skipIf(true)("4", () => {});
});
