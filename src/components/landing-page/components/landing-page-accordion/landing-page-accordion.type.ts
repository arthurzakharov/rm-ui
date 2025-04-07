type Block = {
  title: string;
  content: string;
};

export interface LandingPageAccordionProps {
  title?: string;
  blocks: Block[];
}
