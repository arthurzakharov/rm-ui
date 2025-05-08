import { array, literal, object, optional, string, union } from 'valibot';

export const LogoNameSchema = union([literal('tls'), literal('tuv')]);

export const LogosPropsSchema = object({
  show: optional(array(LogoNameSchema)),
  tlsSrc: optional(string(), ''),
  tuvSrc: optional(string(), ''),
  className: optional(string(), ''),
});
