import { shallowMount, Wrapper } from "@vue/test-utils";
import CitiesList from "@/components/cities-list/CitiesList.vue";
import citiesService from "@/services/cities.service";
import Vue from "vue";

/**
 * Need to mock debounce because of lodash implementation.
 * found the fix here https://github.com/facebook/jest/issues/3465#issuecomment-351186130
 *
 *  FIXME JEST 26+ has a modern (jest.useFakeTimers('modern')) implementation of fake timers that should fix the issue
 */

jest.mock("lodash/debounce", () => jest.fn((fn) => fn));

const citiesAscMock = ["A", "B", "C", "D"];
const citiesDescMock = ["D", "C", "B", "A"];
const citiesFilterDescMock = ["D", "C"];
const citiesFilterAscMock = ["C", "D"];

describe("CitiesList.vue", () => {
  let wrapper: Wrapper<CitiesList>;
  let getCitiesOrderedSpy = jest.spyOn(citiesService, "getCitiesOrdered");
  let searchInput: Wrapper<Vue>;

  beforeEach(() => {
    getCitiesOrderedSpy.mockReturnValueOnce(citiesAscMock);
    wrapper = shallowMount(CitiesList);
    searchInput = wrapper.find('input[name="search"]');
  });

  it("should create component with cities list ASC", () => {
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and return no results", async () => {
    jest.clearAllMocks();
    getCitiesOrderedSpy = getCitiesOrderedSpy.mockReturnValueOnce([]);

    await wrapper.setData({ inputValue: "alk" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();

    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true, "alk");
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and return results", async () => {
    jest.clearAllMocks();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesFilterAscMock);

    await wrapper.setData({ inputValue: "d" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();

    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true, "d");
    expect(wrapper).toMatchSnapshot();
  });

  it("should search return results and sort items", async () => {
    jest.clearAllMocks();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesFilterAscMock);

    await wrapper.setData({ inputValue: "d" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();

    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true, "d");
    expect(wrapper).toMatchSnapshot();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesFilterAscMock);

    await wrapper.setData({ inputValue: "C" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesFilterDescMock);

    const sortButton = wrapper.find("button.btn.btn-yellow");
    await sortButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(3);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(true, "C");
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle sort button", async () => {
    jest.clearAllMocks();
    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesDescMock);

    const sortButton = wrapper.find("button.btn.btn-yellow");
    await sortButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(1);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(false, "");
    expect(wrapper).toMatchSnapshot();

    getCitiesOrderedSpy =
      getCitiesOrderedSpy.mockReturnValueOnce(citiesAscMock);
    await sortButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(getCitiesOrderedSpy).toHaveBeenCalledTimes(2);
    expect(getCitiesOrderedSpy).toHaveBeenCalledWith(false, "");
    expect(wrapper).toMatchSnapshot();
  });
});
