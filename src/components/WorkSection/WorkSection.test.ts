import { test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import WorkSection from "./WorkSection.vue";

const mockData = [
  {
    title: "fake title",
    desc: "fake desc",
    url: "https://fake.com/url",
    repo: "https://fake.com/url",
    stacks: ["cobol"],
  },
];

test("render work section", () => {
  const wrapper = mount(WorkSection, {
    propsData: { data: mockData },
  });

  const text = wrapper.text();

  expect(text).toContain("02");
  expect(text).toContain("What I've Built");
  expect(text).toContain("fake title");
  expect(text).toContain("fake desc");
  expect(wrapper.find("a").attributes("href")).toContain(
    "https://fake.com/url"
  );
});
