import { shallowMount, Wrapper } from "@vue/test-utils";
import StoreOpenUntil from "@/components/store-open-until/StoreOpenUntil.vue";
import Vue from "vue";

describe("StoreOpenUntil.vue", () => {
  let wrapper: Wrapper<StoreOpenUntil>;
  let openUntilSelect: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(StoreOpenUntil);
    openUntilSelect = wrapper.find('select[name="open-until"]');
  });

  it("should create", () => {
    expect(wrapper.vm.$data.selectValue).toEqual("");
    expect(wrapper.vm.$data.openUntilList).toEqual([
      "18:00",
      "19:00",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "23:00",
    ]);
    expect(wrapper).toMatchSnapshot();
  });

  it("should emit value when change select", async () => {
    await wrapper.setData({ selectValue: "19:00" });
    await openUntilSelect.trigger("change");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();

    await wrapper.setData({ selectValue: "23:00" });
    await openUntilSelect.trigger("change");
    await wrapper.vm.$nextTick();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.emitted()).toEqual({
      "selected-time": [
        ["19:00", expect.any(Object)],
        ["23:00", expect.any(Object)],
      ],
    });
  });
});
