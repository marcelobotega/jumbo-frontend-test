import stores from "@/data/stores-data";
import { IStore } from "@/domain/store";
import { UtilService } from "@/services/util.service";

class CitiesService {
  getCitiesOrdered(isAsc = true, search?: string): string[] {
    let cities = Array.from(new Set(stores.map((item: IStore) => item.city)));

    if (search) {
      const escapedSearch = UtilService.escapeRegexpCharacters(search);

      cities = cities.filter(
        (item: string) => item.search(new RegExp(escapedSearch, "i")) > -1
      );
    }

    cities.sort((a: string, b: string) => UtilService.sortString(a, b, isAsc));

    return cities;
  }
}

export default new CitiesService();
