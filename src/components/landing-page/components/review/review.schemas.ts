import { array, object, optional, string } from 'valibot';

const ReviewSchema = object({
  message: string(),
  name: string(),
  link: object({
    href: string(),
    text: string(),
  }),
});

export const ReviewPropsSchema = object({
  title: optional(string()),
  reviews: array(ReviewSchema),
});
