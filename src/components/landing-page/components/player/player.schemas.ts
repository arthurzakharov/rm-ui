import { function_, object, optional, string } from 'valibot';

export const PlayerPropsSchema = object({
  videoId: string(),
  description: string(),
  onPlay: optional(function_()),
});
