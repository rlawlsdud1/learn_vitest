import { describe, test, expect, beforeEach, vi, afterEach } from "vitest";
import { checkIs2100 } from "./check-is-2100";

describe("checkIs2100", () => {
  beforeEach(() => {
    // 테스트 준비 셋업 with mocking
    vi.useFakeTimers();
  });

  afterEach(() => {
    // 원상복귀
    vi.useRealTimers();
  });

  test("2100 x -> false", () => {
    const stdDate = new Date(2000, 1, 1, 13);
    vi.setSystemTime(stdDate);
    const result = checkIs2100();

    expect(result).toEqual(false);
  });

  test("2100 -> true", () => {
    const stdDate = new Date(2100, 1, 1, 13);
    vi.setSystemTime(stdDate);
    const result = checkIs2100();

    expect(result).toEqual(true);
  });
});

// 검증 불가능한 테스트를 모킹을 통해,
// 외부 의존성을 제거함으로써 테스트가 가능해짐
