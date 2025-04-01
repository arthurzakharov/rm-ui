type Logo = {
  name: string;
  priority?: number;
};

export interface LandingPageLogoBoardProps {
  paths: Record<string, string>;
  logos: Logo[];
}
