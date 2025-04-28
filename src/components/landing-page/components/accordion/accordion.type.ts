type AccordionBlock = {
  title: string;
  content: string;
};

export interface AccordionProps {
  title?: string;
  blocks: AccordionBlock[];
}
