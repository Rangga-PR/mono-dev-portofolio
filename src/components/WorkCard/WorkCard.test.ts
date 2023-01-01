import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import WorkCard from "./WorkCard.vue";

const mockData = {
  title: "fake title",
  desc: "fake desc",
  url: "https://fake.com/url",
  repo: "https://fake.com/url",
  stacks: ["cobol"],
};

test("render work card", () => {
  const wrapper = mount(WorkCard, {
    propsData: { work: mockData },
  });

  const text = wrapper.text();

  expect(text).toContain("fake title");
  expect(text).toContain("fake desc");
  expect(wrapper.find("a").attributes("href")).toContain(
    "https://fake.com/url"
  );
});
