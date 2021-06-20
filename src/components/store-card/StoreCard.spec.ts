import { shallowMount } from "@vue/test-utils";
import StoreCard from "@/components/store-card/StoreCard.vue";

const storeMock = {
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

describe("StoreCard.vue", () => {
  it("should create with sundayOpen = true", () => {
    const wrapper = shallowMount(StoreCard, {
      propsData: { store: storeMock },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("should create with sundayOpen = false", () => {
    const storeMockSundayFalse = { ...storeMock };
    storeMockSundayFalse.sundayOpen = false;
    const wrapper = shallowMount(StoreCard, {
      propsData: { store: storeMockSundayFalse },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
