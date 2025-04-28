import type { Block } from '../block';
import type { BLOCK } from '../block';

export type Group = {
  id: number;
  type: BLOCK;
  title: string;
  blocks: Block[];
  hideTop: false;
  hideBottom: false;
};

export interface GroupProps {
  group: Group;
  titleClassName?: string;
  groupClassName?: string;
  blocksClassName?: string;
  blockClassName?: string;
}
