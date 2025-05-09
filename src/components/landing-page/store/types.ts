export type State = {
  appHeaderElement: HTMLDivElement | null;
  mainElement: HTMLDivElement | null;
  successBoxElement: HTMLDivElement | null;
};

export type Action = {
  setAppHeaderElement: (ref: HTMLDivElement) => void;
  setMainElement: (ref: HTMLDivElement) => void;
  setSuccessBoxElement: (ref: HTMLDivElement) => void;
};
