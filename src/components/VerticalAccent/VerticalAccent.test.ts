import { test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import VerticalAccent from "./VerticalAccent.vue";

test("render vertical accent", () => {
  const wrapper = mount(VerticalAccent);
  expect(wrapper.text()).toContain("ranggaputraraharja@gmail.com");
  expect(wrapper.findComponent("[data-testid=email-icon]")).toBeInstanceOf(
    VueWrapper
  );
  expect(wrapper.findComponent("[data-testid=github-icon]")).toBeInstanceOf(
    VueWrapper
  );
});
