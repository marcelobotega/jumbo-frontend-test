import { UtilService } from "@/services/util.service";

const stringListMock = ["C", "D", "A", "B"];
const booleanListMock = [true, false, false, true];

describe("util.service.ts", () => {
  it("should test sortString ASC", () => {
    expect(
      stringListMock.sort((a: string, b: string) =>
        UtilService.sortString(a, b, true)
      )
    ).toEqual(["A", "B", "C", "D"]);
  });

  it("should test sortString DESC", () => {
    expect(
      stringListMock.sort((a: string, b: string) =>
        UtilService.sortString(a, b, false)
      )
    ).toEqual(["D", "C", "B", "A"]);
  });

  it("should test sortBoolean ASC", () => {
    expect(
      booleanListMock.sort((a: boolean, b: boolean) =>
        UtilService.sortBoolean(a, b, true)
      )
    ).toEqual([true, true, false, false]);
  });

  it("should test sortBoolean DESC", () => {
    expect(
      booleanListMock.sort((a: boolean, b: boolean) =>
        UtilService.sortBoolean(a, b, false)
      )
    ).toEqual([false, false, true, true]);
  });

  it("should test escapeRegexpCharacters", () => {
    expect(
      UtilService.escapeRegexpCharacters(
        ".*+this?^string${makes}no()sense|at[all]"
      )
    ).toEqual(
      "\\.\\*\\+this\\?\\^string\\$\\{makes\\}no\\(\\)sense\\|at\\[all\\]"
    );
  });
});
