import stores from "@/data/stores-data";
import { IStore } from "@/domain/store";

class CitiesService {
  getCitiesOrdered(asc = true): string[] {
    const cities = Array.from(new Set(stores.map((item: IStore) => item.city)));
    if (asc) {
      cities.sort(this.sortAsc);
    } else {
      cities.sort(this.sortDesc);
    }

    return cities;
  }

  private sortAsc(a: string, b: string): number {
    return a.localeCompare(b);
  }

  private sortDesc(a: string, b: string): number {
    return b.localeCompare(a);
  }
}

export default new CitiesService();
