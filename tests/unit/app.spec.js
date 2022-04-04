import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App", () => {
  it("checks if data properties are correctly set", () => {
    const localVue = createLocalVue();
    let wrapper = shallowMount(App, {
      localVue,
    });
    expect(wrapper.vm.$data).toStrictEqual({
      canTrigger: true,
      comment: "",
      isModal: false,
      isSticker: false,
      surveyData: {},
      userRating: 0,
    });
  });

  it("computes default customStyle if not passed in the component", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(App, {
      localVue,
      propsData: {},
    });
    expect(wrapper.vm.customStyle.backgroundColor).toBe("white");
    expect(wrapper.vm.customStyle.color).toBe("black");
    expect(wrapper.vm.customStyle.bottom).toBe(undefined);
    expect(wrapper.vm.customStyle.top).toBe(undefined);
  });

  it("defaults orientation class to bottom-right (br)", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(App, {
      localVue,
      propsData: {},
    });
    expect(wrapper.vm.orientationClass).toBe("br");
  });

  it("computes orientation class to proper orientation given in props", () => {
    const localVue = createLocalVue();
    let wrapper = shallowMount(App, {
      localVue,
      propsData: { orientation: "bl" },
    });
    expect(wrapper.vm.orientationClass).toBe("bl");
    wrapper = shallowMount(App, {
      localVue,
      propsData: { orientation: "tl" },
    });
    expect(wrapper.vm.orientationClass).toBe("tl");
    wrapper = shallowMount(App, {
      localVue,
      propsData: { orientation: "bl" },
    });
    expect(wrapper.vm.orientationClass).toBe("bl");
    wrapper = shallowMount(App, {
      localVue,
      propsData: { orientation: "tr" },
    });
    expect(wrapper.vm.orientationClass).toBe("tr");
    wrapper = shallowMount(App, {
      localVue,
      propsData: { orientation: "nonsense" },
    });
    expect(wrapper.vm.orientationClass).toBe("br");
  });

  it("defaults props to proper values if none are passed", () => {
    const localVue = createLocalVue();
    let wrapper = shallowMount(App, {
      localVue,
    });

    expect(wrapper.vm.starsNumber).toBe(5);
    expect(wrapper.vm.sticker).toBe(false);
    expect(wrapper.vm.stickerText).toBe("Click me");
    expect(wrapper.vm.studyId).toBe("");
    expect(wrapper.vm.trigger).toBe("none");
    expect(wrapper.vm.triggerDelay).toBe("5000");
  });
});
