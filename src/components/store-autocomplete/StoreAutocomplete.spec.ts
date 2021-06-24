import { shallowMount, Wrapper } from "@vue/test-utils";
import StoreAutocomplete from "@/components/store-autocomplete/StoreAutocomplete.vue";
import Vue from "vue";

/**
 * Need to mock debounce because of lodash implementation.
 * found the fix here https://github.com/facebook/jest/issues/3465#issuecomment-351186130
 *
 *  FIXME JEST 26+ has a modern (jest.useFakeTimers('modern')) implementation of fake timers that should fix the issue
 */
jest.mock("lodash/debounce", () => jest.fn((fn) => fn));

describe("StoreAutocomplete.vue", () => {
  let wrapper: Wrapper<StoreAutocomplete>;
  let searchInput: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(StoreAutocomplete);
    searchInput = wrapper.find('input[name="search"]');
  });

  it("should create", () => {
    expect(wrapper.vm.$data.stores).toEqual([]);
    expect(wrapper.vm.$data.cities).toEqual([]);
    expect(wrapper.vm.$data.inputValue).toEqual("");
    expect(wrapper.vm.$data.listPosition).toEqual(0);
    expect(wrapper.vm.$data.typed).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and find no results", async () => {
    await wrapper.setData({ inputValue: "will not find anything" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and find only stores", async () => {
    await wrapper.setData({
      inputValue: "Jumbo Amsterdam Eerste Constantijn Huygensstraat",
    });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and find stores and cities", async () => {
    await wrapper.setData({ inputValue: "alk" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and more than 10 stores", async () => {
    await wrapper.setData({ inputValue: "amsterdam" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and more than 10 stores and 10 cities", async () => {
    await wrapper.setData({ inputValue: "al" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should search and clean the input", async () => {
    await wrapper.setData({ inputValue: "al" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    await wrapper.setData({ inputValue: "" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).toEqual({ "item-selected": [["", ""]] });
    expect(wrapper).toMatchSnapshot();
  });

  it("should test click outside", async () => {
    await wrapper.setData({ inputValue: "al" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    document.dispatchEvent(new Event("click"));
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });

  it("should test created/destroyed", async () => {
    const addEventListenerSpy = jest.spyOn(document, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

    wrapper = shallowMount(StoreAutocomplete);
    await wrapper.vm.$nextTick();
    wrapper.destroy();
    await wrapper.vm.$nextTick();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });

  it("should search and use keydown.down to navigate in the list", async () => {
    await wrapper.setData({ inputValue: "valke" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(1);
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(2);
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(3);
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(4);
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(0);
    await searchInput.trigger("keydown.down");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(1);
  });

  it("should search and use keydown.up to navigate in the list", async () => {
    await wrapper.setData({ inputValue: "valke" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(4);
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(3);
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(2);
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(1);
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(0);
    await searchInput.trigger("keydown.up");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.vm.$data.listPosition).toEqual(4);
  });

  it("should search and press enter to selected item on list", async () => {
    await wrapper.setData({ inputValue: "valke" });
    await searchInput.trigger("input");
    await searchInput.trigger("keydown.up");
    await searchInput.trigger("keydown.up");
    await searchInput.trigger("keydown.enter");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.emitted()).toEqual({
      "item-selected": [
        [
          "Jumbo Valkenswaard Willibrorduslaan",
          "Jumbo Valkenswaard Willibrorduslaan",
        ],
      ],
    });
  });

  it("should search anything and press enter", async () => {
    await wrapper.setData({ inputValue: "dontfinndanything" });
    await searchInput.trigger("input");
    await searchInput.trigger("keydown.enter");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.emitted()).toEqual({
      "item-selected": [["", ""]],
    });
  });

  it("should search with openUntil set", async () => {
    await wrapper.setData({ inputValue: "amsterdam" });
    await wrapper.setProps({ openUntil: "21:00" });
    await searchInput.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });
});
