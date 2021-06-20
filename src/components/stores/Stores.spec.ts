import { shallowMount } from "@vue/test-utils";
import Stores from "@/components/stores/Stores.vue";

describe("Stores.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(Stores);
    expect(wrapper).toMatchSnapshot();
  });
});
