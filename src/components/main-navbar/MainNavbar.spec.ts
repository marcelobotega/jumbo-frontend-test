import { shallowMount, Wrapper } from "@vue/test-utils";
import MainNavbar from "@/components/main-navbar/MainNavbar.vue";

describe("CitiesPage.vue", () => {
  let wrapper: Wrapper<MainNavbar>;

  beforeEach(() => {
    wrapper = shallowMount(MainNavbar, {
      stubs: ["router-link", "router-view"],
    });
  });
  it("should create", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mobile menu open/close when clicked", async () => {
    const button = wrapper.find("button.text-gray-500");
    expect(wrapper).toMatchSnapshot();
    button.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    button.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });
});
