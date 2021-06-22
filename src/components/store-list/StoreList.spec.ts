import { mount, Wrapper } from "@vue/test-utils";
import StoreList from "@/components/store-list/StoreList.vue";
import storesService from "@/services/store.service";
import StoreAutocomplete from "@/components/store-autocomplete/StoreAutocomplete.vue";

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
  const getStoresOrderedSpy = jest.spyOn(storesService, "getStoresOrdered");

  beforeEach(() => {
    getStoresOrderedSpy.mockReturnValueOnce([storeOneMock, storeTwoMock]);
    wrapper = mount(StoreList);
  });

  it("should create", () => {
    expect(getStoresOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getStoresOrderedSpy).toHaveBeenCalledWith(true, "addressName");
    expect(wrapper).toMatchSnapshot();
  });

  it("should create test", async () => {
    jest.resetAllMocks();
    getStoresOrderedSpy.mockReturnValueOnce([storeTwoMock]);

    wrapper
      .findComponent(StoreAutocomplete)
      .vm.$emit("item-selected", "Jumbo St. Oedenrode Hertog Hendrikstraat");

    await wrapper.vm.$nextTick();
    expect(getStoresOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getStoresOrderedSpy).toHaveBeenCalledWith(
      true,
      "addressName",
      "Jumbo St. Oedenrode Hertog Hendrikstraat"
    );
    expect(wrapper).toMatchSnapshot();
  });
});
