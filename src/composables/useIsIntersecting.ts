import type { Element } from "../type";
import { onMounted, onUnmounted, Ref, ref } from "vue";

export interface IntersectionOptions {
  root?: Element;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export default (
  target: Ref<Element>,
  options: IntersectionOptions = {}
): Ref<boolean> => {
  const isIntersecting = ref(false);
  const { once, ...observerOptions } = options;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      isIntersecting.value = true;
      once && observer.unobserve(entry.target);
    } else {
      isIntersecting.value = false;
    }
  }, observerOptions);

  onMounted(() => {
    target.value && observer.observe(target.value);
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return isIntersecting;
};
