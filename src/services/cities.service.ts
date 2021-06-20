import stores from "@/data/stores-data";
import { IStore } from "@/domain/store";
import { UtilService } from "@/services/util.service";

class CitiesService {
  getCitiesOrdered(isAsc = true): string[] {
    const cities = Array.from(new Set(stores.map((item: IStore) => item.city)));

    cities.sort((a: string, b: string) => UtilService.sortString(a, b, isAsc));

    return cities;
  }
}

export default new CitiesService();
