export type LogoName = 'tls' | 'tuv';

export interface LogosProps {
  show: LogoName[];
  tlsSrc?: string;
  tuvSrc?: string;
}
