export type DropdownChoice = {
  value: string;
  label: string;
};

export interface DropdownProps {
  choices: DropdownChoice[];
  choice: DropdownChoice[] | null;
  placeholder?: string;
  noResult?: string;
  isSearchHidden?: boolean;
  isSuccessHighlighted?: boolean;
  multiple?: boolean;
  closeButton?: string;
  className?: string;
  onChange: (values: DropdownChoice[]) => void;
  onOpen?: (height: number, width: number) => void;
  onClose?: () => void;
}
