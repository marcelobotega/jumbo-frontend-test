import { shallowMount, Wrapper } from "@vue/test-utils";
import CitiesList from "@/components/cities-list/CitiesList.vue";
import citiesService from "@/services/cities.service";

const citiesAscMock = ["A", "B", "C", "D"];
const citiesDescMock = ["D", "C", "B", "A"];

describe("CitiesList.vue", () => {
  let wrapper: Wrapper<CitiesList>;
  let getCitiesOrderedSpy = jest.spyOn(citiesService, "getCitiesOrdered");

  beforeEach(() => {
    getCitiesOrderedSpy.mockReturnValueOnce(citiesAscMock);

    wrapper = shallowMount(CitiesList);
  });
  it("should create component with cities list ASC", () => {
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle sort button", async () => {
    jest.resetAllMocks();
    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesDescMock);

    const sortButton = wrapper.find("button.btn.btn-yellow");
    sortButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(false);
    expect(wrapper).toMatchSnapshot();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesAscMock);
    sortButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(2);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(false);
    expect(wrapper).toMatchSnapshot();
  });
});
