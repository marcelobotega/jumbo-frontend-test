import citiesService from "@/services/cities.service";

describe("cities.service.ts", () => {
  it("should test getCitiesOrdered ASC", () => {
    const citiesAsc = citiesService.getCitiesOrdered();
    expect(citiesAsc[21]).toEqual("Baarle-Nassau");
    expect(citiesAsc[27]).toEqual("Bedum");
    expect(citiesAsc).toHaveLength(404);
  });

  it("should test getCitiesOrdered DESC", () => {
    const citiesAsc = citiesService.getCitiesOrdered(false);
    expect(citiesAsc[54]).toEqual("Vianen");
    expect(citiesAsc[23]).toEqual("Winssen");
    expect(citiesAsc).toHaveLength(404);
  });

  it("should test getCitiesOrdered ASC with search param", () => {
    const citiesOrdered = citiesService.getCitiesOrdered(true, "alk");
    expect(citiesOrdered).toEqual(["Alkmaar", "Valkenswaard"]);
    expect(citiesOrdered).toHaveLength(2);
  });

  it("should test getCitiesOrdered asc with search param with regexp character", () => {
    const citiesOrdered = citiesService.getCitiesOrdered(true, "(");
    expect(citiesOrdered).toEqual([
      "De Koog (Texel)",
      "Den Burg (Texel)",
      "Nes (Ameland)",
    ]);
    expect(citiesOrdered).toHaveLength(3);
  });

  it("should test getCitiesOrdered without cities where all stores are closed", () => {
    expect(
      citiesService
        .getCitiesOrdered()
        .filter((item: string) => item === "Uithoorn")
    ).toEqual([]);
  });
});
