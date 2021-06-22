export class UtilService {
  static sortString(a: string, b: string, isAsc: boolean): number {
    if (isAsc) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  }

  static sortBoolean(a: boolean, b: boolean, isAsc: boolean): number {
    if (isAsc) {
      return a === b ? 0 : a ? -1 : 1;
    } else {
      return a === b ? 0 : a ? 1 : -1;
    }
  }

  static escapeRegexpCharacters(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}
