import { mount, Wrapper } from "@vue/test-utils";
import StoreList from "@/components/stores/StoreList.vue";
import storesService from "@/services/store.service";

/**
 * Need to mock debounce because of lodash implementation.
 * found the fix here https://github.com/facebook/jest/issues/3465#issuecomment-351186130
 *
 *  FIXME JEST 26+ has a modern (jest.useFakeTimers('modern')) implementation of fake timers that should fix the issue
 */
jest.mock("lodash/debounce", () => jest.fn((fn) => fn));

const storeOneMock = {
  city: "St. Nicolaasga",
  postalCode: "8521 KD",
  street: "Molewei",
  street2: "1",
  street3: "",
  addressName: "Jumbo St. Nicolaasga Jan Altenburg",
  uuid: "n5MKYx4XLxAAAAFIG.EYwKxJ",
  latitude: "52.923021",
  longitude: "5.740684",
  complexNumber: "33250",
  locationType: "SupermarktPuP",
  collectionPoint: true,
  sundayOpen: true,
  todayOpen: "08:00",
  todayClose: "20:00",
  sapStoreID: "3420",
  showWarningMessage: true,
};

const storeTwoMock = {
  city: "St. Oedenrode",
  postalCode: "5492 BA",
  street: "Hertog Hendrikstraat",
  street2: "1",
  street3: "",
  addressName: "Jumbo St. Oedenrode Hertog Hendrikstraat",
  uuid: "JygKYx4XSVYAAAFlg8UV9qHu",
  latitude: "51.561974",
  longitude: "5.460663",
  complexNumber: "32360",
  locationType: "SupermarktPuP",
  collectionPoint: true,
  sundayOpen: true,
  todayOpen: "08:00",
  todayClose: "21:00",
  sapStoreID: "5127",
  showWarningMessage: true,
};

describe("StoreList.vue", () => {
  let wrapper: Wrapper<StoreList>;
  let getStoresOrderedSpy = jest.spyOn(storesService, "getStoresOrdered");

  beforeEach(() => {
    getStoresOrderedSpy.mockReturnValueOnce([storeOneMock, storeTwoMock]);
    wrapper = mount(StoreList);
  });

  it("should create", () => {
    expect(getStoresOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getStoresOrderedSpy).toHaveBeenCalledWith(true, "addressName");
    expect(wrapper).toMatchSnapshot();
  });

  it("should use input and doSearch", async () => {
    jest.resetAllMocks();
    getStoresOrderedSpy = getStoresOrderedSpy.mockReturnValueOnce([
      storeOneMock,
    ]);

    const searchInput = wrapper.find("#search");

    (searchInput.element as HTMLInputElement).value =
      "Jumbo St. Nicolaasga Jan Altenburg";

    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(getStoresOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getStoresOrderedSpy).toHaveBeenCalledWith(
      true,
      "addressName",
      "Jumbo St. Nicolaasga Jan Altenburg"
    );
    expect(wrapper).toMatchSnapshot();

    getStoresOrderedSpy = getStoresOrderedSpy.mockReturnValueOnce([
      storeTwoMock,
    ]);
    (searchInput.element as HTMLInputElement).value =
      "Jumbo St. Oedenrode Hertog Hendrikstraat";

    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(getStoresOrderedSpy).toHaveBeenCalledTimes(2);
    expect(getStoresOrderedSpy).toHaveBeenCalledWith(
      true,
      "addressName",
      "Jumbo St. Oedenrode Hertog Hendrikstraat"
    );
    expect(wrapper).toMatchSnapshot();
  });
});
