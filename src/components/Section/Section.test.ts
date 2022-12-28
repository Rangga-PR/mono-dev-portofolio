import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Section from "./Section.vue";

test("render section", () => {
  const wrapper = mount(Section, {
    propsData: { title: "fake title", subtitle: "fake subtitle" },
  });

  const text = wrapper.text();

  expect(text).toContain("fake title");
  expect(text).toContain("fake subtitle");
});
