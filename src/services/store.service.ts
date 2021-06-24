import stores from "@/data/stores-data";
import { IStore } from "@/domain/store";
import { UtilService } from "@/services/util.service";

class StoreService {
  getStoresOrdered(
    isAsc = true,
    field: keyof IStore = "addressName",
    search?: string,
    openUntil?: string
  ): IStore[] {
    let storesList = stores.filter(UtilService.isStoreOpen);

    if (search) {
      const escapedSearch = UtilService.escapeRegexpCharacters(search);

      storesList = storesList.filter(
        (item: IStore) =>
          item.addressName.search(new RegExp(escapedSearch, "i")) > -1 ||
          item.city.search(new RegExp(escapedSearch, "i")) > -1
      );
    }

    if (openUntil) {
      const escapedOpenUntil = UtilService.escapeRegexpCharacters(openUntil);

      storesList = storesList.filter(
        (item: IStore) =>
          item.todayClose.search(new RegExp(escapedOpenUntil, "i")) > -1
      );
    }

    storesList.sort((a: IStore, b: IStore) =>
      this.sortStores(a, b, field, isAsc)
    );

    return storesList;
  }

  getStoresByCity(city: string): IStore[] {
    const escapedSearch = UtilService.escapeRegexpCharacters(city);

    return stores
      .filter(
        (item: IStore) =>
          item.city.search(new RegExp(escapedSearch, "i")) > -1 &&
          UtilService.isStoreOpen(item)
      )
      .sort((a: IStore, b: IStore) =>
        this.sortStores(a, b, "addressName", true)
      );
  }

  getStoresOpenUntilValues(): string[] {
    return Array.from(
      new Set(
        stores
          .filter(UtilService.isStoreOpen)
          .map((item: IStore) => item.todayClose)
          .sort()
      )
    );
  }

  private sortStores(
    a: IStore,
    b: IStore,
    field: keyof IStore,
    isAsc: boolean
  ): number {
    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === "boolean" && typeof bValue === "boolean") {
      return UtilService.sortBoolean(aValue, bValue, isAsc);
    } else if (typeof aValue === "string" && typeof bValue === "string") {
      return UtilService.sortString(aValue, bValue, isAsc);
    } else {
      return -1;
    }
  }
}

export default new StoreService();
