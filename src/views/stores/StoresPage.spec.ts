import { shallowMount } from "@vue/test-utils";
import StoresPage from "@/views/stores/StoresPage.vue";

describe("StoresPage.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(StoresPage);
    expect(wrapper).toMatchSnapshot();
  });
});
