import { shallowMount } from "@vue/test-utils";
import CityCard from "@/components/city-card/CityCard.vue";
import storeService from "@/services/store.service";

describe("CityCard.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(CityCard, {
      propsData: { city: "amstelveen" },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("should open expansion panel", async () => {
    const wrapper = shallowMount(CityCard, {
      propsData: { city: "amstelveen" },
    });

    const spy = jest.spyOn(storeService, "getStoresByCity");
    await wrapper.find(".card-content").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();

    await wrapper.find(".card-content").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();

    await wrapper.find(".card-content").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("amstelveen");
  });
});
