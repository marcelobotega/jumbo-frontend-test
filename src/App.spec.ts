import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(App, {
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
