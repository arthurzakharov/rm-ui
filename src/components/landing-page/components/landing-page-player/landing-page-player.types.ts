export interface LandingPagePlayerProps {
  videoId: string;
  description: string;
  onPlay?: (id: string) => void;
}
