import { test, expect, describe } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  test("as button", () => {
    const wrapper = mount(Button, { slots: { default: "click me" } });
    expect(wrapper.text()).toContain("click me");
    expect(wrapper.findComponent("button")).toBeInstanceOf(VueWrapper);
  });

  test("as anchor", () => {
    const wrapper = mount(Button, {
      slots: { default: "click me" },
      props: { type: "a" },
    });
    expect(wrapper.text()).toContain("click me");
    expect(wrapper.findComponent("a")).toBeInstanceOf(VueWrapper);
  });
});
