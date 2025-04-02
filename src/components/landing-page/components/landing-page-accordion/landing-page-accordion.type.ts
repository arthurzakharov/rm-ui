type Block = {
  title: string;
  content: string;
};

export interface LandingPageAccordionProps {
  head?: string;
  blocks: Block[];
}
