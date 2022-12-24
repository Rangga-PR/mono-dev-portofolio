import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "./Footer.vue";

test("render footer content", () => {
  const wrapper = mount(Footer);
  expect(wrapper.text()).toContain("Designed & Built by Rangga Putra R");
});
