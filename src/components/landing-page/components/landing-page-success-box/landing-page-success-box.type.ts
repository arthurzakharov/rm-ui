import { RefObject } from 'react';

type ListItem = {
  type: 'check' | 'question' | 'exclamation' | 'cross';
  content: string;
  subContent?: string[];
};

type TitleElement = {
  type: 'title';
  data: string;
};

type HtmlElement = {
  type: 'html';
  data: string;
};

type ListElement = {
  type: 'list';
  data: ListItem[];
};

export interface LandingPageSuccessBoxProps {
  color: string;
  head: {
    primary?: string;
    secondary: string;
  };
  main: (TitleElement | HtmlElement | ListElement)[];
  refs?: {
    head?: RefObject<HTMLDivElement>;
    main?: RefObject<HTMLDivElement>;
  };
  className?: string;
}
