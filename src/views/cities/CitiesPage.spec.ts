import { shallowMount } from "@vue/test-utils";
import CitiesPage from "@/views/cities/CitiesPage.vue";

describe("CitiesPage.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(CitiesPage);
    expect(wrapper).toMatchSnapshot();
  });
});
