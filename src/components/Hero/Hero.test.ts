import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "./Hero.vue";

test("render hero content", () => {
  const wrapper = mount(Hero);
  const text = wrapper.text();

  expect(text).toContain("Hi,");
  expect(text).toContain("I'am Rangga");
  expect(text).toContain(
    "I’m a software engineer specializing in building web applications. Mostly I work on frontend, but i also enjoy working on backend."
  );
  expect(text).toContain("CONTACT ME");
});
