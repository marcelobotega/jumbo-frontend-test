import citiesService from "@/services/cities.service";

describe("cities.service.ts", () => {
  it("should test getCitiesOrdered ASC", () => {
    const citiesAsc = citiesService.getCitiesOrdered();
    expect(citiesAsc[21]).toEqual("Assen");
    expect(citiesAsc[27]).toEqual("Bathmen");
    expect(citiesAsc).toHaveLength(406);
  });

  it("should test getCitiesOrdered DESC", () => {
    const citiesAsc = citiesService.getCitiesOrdered(false);
    expect(citiesAsc[54]).toEqual("Vianen");
    expect(citiesAsc[23]).toEqual("Winssen");
    expect(citiesAsc).toHaveLength(406);
  });
});
