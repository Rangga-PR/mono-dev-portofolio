import { test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import Timeline from "./Timeline.vue";

const mockData = [
  {
    company: "fake company",
    title: "fake job title",
    desc: "fake desc",
    start: "February 2019",
    end: "Mei 2019",
  },
];

test("render timeline", () => {
  const wrapper = mount(Timeline, {
    propsData: { data: mockData },
  });

  const text = wrapper.text();

  expect(text).toContain("fake company");
  expect(text).toContain("fake job title");
  expect(text).toContain("fake desc");
  expect(text).toContain("February 2019");
  expect(text).toContain("Mei 2019");
});
