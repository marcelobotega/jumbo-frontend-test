import storeService from "@/services/store.service";

describe("store.service.ts", () => {
  it("should test getStoresOrdered ASC", () => {
    const stores = storeService.getStoresOrdered();
    expect(stores[21].addressName).toEqual("Jumbo Amersfoort Vathorst");
    expect(stores[400].addressName).toEqual("Jumbo Nieuwe Niedorp Trambaan");
    expect(stores).toHaveLength(674);
  });

  it("should test getStoresOrdered DESC", () => {
    const stores = storeService.getStoresOrdered(false);
    expect(stores[21].addressName).toEqual("Jumbo Zoetermeer Kentgensplein");
    expect(stores[400].addressName).toEqual("Jumbo Heerhugowaard Centrumwaard");
    expect(stores).toHaveLength(674);
  });
  it("should test getStoresOrdered ASC with field city", () => {
    const stores = storeService.getStoresOrdered(true, "city");
    expect(stores[21].addressName).toEqual(
      "Jumbo Amersfoort Den Blanken Nieuwland"
    );
    expect(stores[400].addressName).toEqual("Jumbo Nieuwe Niedorp Trambaan");
    expect(stores).toHaveLength(674);
  });

  it("should test getStoresOrdered ASC with field sundayOpen", () => {
    const stores = storeService.getStoresOrdered(true, "sundayOpen");
    expect(stores[21].addressName).toEqual("Jumbo Putten Postweg");
    expect(stores[400].addressName).toEqual("Jumbo Houten Spoorhaag");
    expect(stores).toHaveLength(674);
  });

  it("should test getStoresOrdered DESC with field sundayOpen", () => {
    const stores = storeService.getStoresOrdered(false, "sundayOpen");
    expect(stores[21].addressName).toEqual("Jumbo Budel Jumbo Hesselberth");
    expect(stores[400].addressName).toEqual("Jumbo Vlijmen Oliemaat");
    expect(stores).toHaveLength(674);
  });

  it("should test getStoresOrdered ASC with search param", () => {
    let stores = storeService.getStoresOrdered(true, "addressName", "alk");
    expect(stores[3].addressName).toEqual("Jumbo Alkmaar Winkelwaard");
    expect(stores[6].addressName).toEqual("Jumbo Valkenswaard Leenderweg");
    expect(stores).toHaveLength(9);
    stores = storeService.getStoresOrdered(
      true,
      "addressName",
      "Jumbo Valkenswaard Leenderweg"
    );
    expect(stores[0].addressName).toEqual("Jumbo Valkenswaard Leenderweg");
    expect(stores).toHaveLength(1);
  });

  it("should test getStoresOrdered asc with search param with regexp character", () => {
    const stores = storeService.getStoresOrdered(true, "addressName", "(");
    expect(stores[0].addressName).toEqual("Jumbo De Koog (Texel) De Koog");
    expect(stores[1].addressName).toEqual("Jumbo Den Burg (Texel) Den Burg");
    expect(stores[2].addressName).toEqual("Jumbo Nes (Ameland) Hoge Eggenweg");
    expect(stores).toHaveLength(3);
  });

  it("should test getStoresByCity ", () => {
    const stores = storeService.getStoresByCity("amstelveen");
    expect(stores[0].addressName).toEqual("Jumbo Amstelveen Groenhof");
    expect(stores[1].addressName).toEqual("Jumbo Amstelveen Veenbrink");
    expect(stores).toHaveLength(2);
  });
});
