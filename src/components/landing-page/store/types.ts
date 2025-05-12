export type State = {
  mainElement: HTMLDivElement | null;
  successBoxElement: HTMLDivElement | null;
};

export type Action = {
  setMainElement: (ref: HTMLDivElement) => void;
  setSuccessBoxElement: (ref: HTMLDivElement) => void;
};
