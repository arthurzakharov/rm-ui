type MainType = 'title' | 'html' | 'list';

type ListType = 'check' | 'question' | 'exclamation' | 'cross';

type ListItem = {
  type: ListType;
  content: string;
  subContent: Array<string>;
};

type Main<T extends MainType, D> = {
  type: T;
  data: D;
};

type TitleElement = Main<'title', string>;

type HtmlElement = Main<'html', string>;

type ListElement = Main<'list', Array<ListItem>>;

type Head = {
  primary: string;
  secondary: string;
};

type Body = Array<TitleElement | HtmlElement | ListElement>;

export interface SuccessBoxProps {
  head: Head;
  body: Body;
  color: string;
}
