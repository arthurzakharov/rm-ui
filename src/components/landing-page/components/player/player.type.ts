export interface PlayerProps {
  videoId: string;
  description: string;
  onPlay?: (id: string) => void;
}
