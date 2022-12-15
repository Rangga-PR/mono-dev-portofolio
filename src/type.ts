export interface Experience {
  company: string;
  title: string;
  desc: string;
  start: string;
  end: string;
}

export interface Work {
  title: string;
  desc: string;
  repo: string;
  url?: string;
  stacks: string[];
}

export type Element = HTMLElement | null | undefined;
