import { shallowMount } from "@vue/test-utils";
import Home from "@/views/home/Home.vue";

describe("Home.vue", () => {
  it("should create home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toMatchSnapshot();
  });
});
