import stores from "@/data/stores-data";
import { IStore } from "@/domain/store";
import { UtilService } from "@/services/util.service";

class StoreService {
  getStoresOrdered(
    isAsc = true,
    field: keyof IStore = "addressName",
    search?: string
  ): IStore[] {
    let storesList = stores;

    if (search) {
      const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      storesList = stores.filter(
        (item: IStore) =>
          item.addressName.search(new RegExp(escapedSearch, "i")) > -1 ||
          item.city.search(new RegExp(escapedSearch, "i")) > -1
      );
    }

    storesList.sort((a: IStore, b: IStore) =>
      this.sortStores(a, b, field, isAsc)
    );

    return storesList;
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
