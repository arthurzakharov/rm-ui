import {
  object,
  string,
  number,
  union,
  array,
  record,
  literal,
  fallback,
  pipe,
  hexColor,
  nullable,
  optional,
} from 'valibot';
import { AccordionPropsSchema } from '../components/accordion';
import { ContactPropsSchema } from '../components/contact';
import { CtaButtonPropsSchemas } from '../components/cta-button';
import { HowToPropsSchemas } from '../components/how-to';
import { LogoBoardPropsSchema } from '../components/logo-board';
import { PlayerPropsSchema } from '../components/player';
import { ReviewPropsSchema } from '../components/review';
import { OrderedListPropsSchema } from '../components/ordered-list';
import { LogosPropsSchema } from '../../logos';
import { AdvantagesPropsSchema } from '../components/advantages';

// Union types
export const ModeTypeSchema = union([literal('some'), literal('every')]);
const ListTypeSchema = union([literal('check'), literal('question'), literal('exclamation'), literal('cross')]);
const BodyTypeSchema = union([literal('title'), literal('html'), literal('list')]);
const ForceResultSchema = union([literal('success'), literal('fail'), literal('none')]);
// Condition
export const ExtraConditionSchema = record(string(), string());
export const ExtraSchema = object({
  mode: ModeTypeSchema,
  condition: array(ExtraConditionSchema),
});
export const ScreenSchema = object({
  lessThan: nullable(number()),
  moreThan: nullable(number()),
});
export const FormKeyConditionSchema = object({
  value: string(),
  extra: nullable(ExtraSchema),
});
export const FormSchema = record(string(), array(FormKeyConditionSchema));
export const ConditionSchema = fallback(
  object({
    forceResult: ForceResultSchema,
    mode: ModeTypeSchema,
    screen: nullable(ScreenSchema),
    form: nullable(FormSchema),
  }),
  {
    forceResult: 'none',
    mode: 'some',
    screen: null,
    form: null,
  },
);
// Prio fil
export const VariationSchema = fallback(
  object({
    color: pipe(string(), hexColor()),
    order: array(BodyTypeSchema),
    head: number(),
    title: number(),
    html: number(),
    list: number(),
    condition: nullable(ConditionSchema),
  }),
  {
    color: '#00b649',
    order: ['title', 'list', 'html'],
    head: 1,
    title: 1,
    html: 1,
    list: 1,
    condition: null,
  },
);
export const SuccessBoxHeadSchema = object({
  variationId: number(),
  content: object({
    primary: string(),
    secondary: string(),
  }),
  condition: nullable(ConditionSchema),
});
export const SuccessBoxTitleSchema = object({
  variationId: number(),
  content: string(),
  condition: nullable(ConditionSchema),
});
export const SuccessBoxHtmlSchema = object({
  variationId: number(),
  content: string(),
  condition: nullable(ConditionSchema),
});
export const SuccessBoxListSchema = object({
  variationId: number(),
  content: object({
    priority: array(ListTypeSchema),
    content: array(
      object({
        type: ListTypeSchema,
        content: string(),
        subContent: array(string()),
        condition: nullable(ConditionSchema),
      }),
    ),
  }),
  condition: nullable(ConditionSchema),
});
export const SuccessBoxSchema = fallback(
  object({
    head: array(SuccessBoxHeadSchema),
    body: object({
      title: array(SuccessBoxTitleSchema),
      html: array(SuccessBoxHtmlSchema),
      list: array(SuccessBoxListSchema),
    }),
  }),
  {
    head: [],
    body: {
      title: [],
      html: [],
      list: [],
    },
  },
);
export const PropsSchema = object({
  accordion: optional(AccordionPropsSchema),
  advantageList: optional(AdvantagesPropsSchema),
  advantageListNoButton: optional(AdvantagesPropsSchema),
  contact: optional(ContactPropsSchema),
  button: optional(CtaButtonPropsSchemas),
  howTo: optional(HowToPropsSchemas),
  logoBoard: optional(LogoBoardPropsSchema),
  player: optional(PlayerPropsSchema),
  review: optional(ReviewPropsSchema),
  orderedList: optional(OrderedListPropsSchema),
  logos: optional(LogosPropsSchema),
});
export const ContentSchema = object({
  head: string(),
  body: string(),
});
// TODO: convert to Object, so Can use in type for blueprint
export const GroupSchema = object({
  content: ContentSchema,
  props: nullable(PropsSchema),
  condition: nullable(ConditionSchema),
});
export const PrioSchema = fallback(
  object({
    variation: nullable(array(VariationSchema)),
    successBox: nullable(SuccessBoxSchema),
    question: nullable(array(GroupSchema)),
    sidebar: nullable(array(GroupSchema)),
    footer: nullable(array(GroupSchema)),
  }),
  {
    variation: null,
    successBox: null,
    question: null,
    sidebar: null,
    footer: null,
  },
);
