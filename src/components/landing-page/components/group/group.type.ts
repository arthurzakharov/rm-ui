import type { Block } from '../block';
import type { BLOCK } from '../block';

export type Group = {
  id: number;
  type: BLOCK;
  title: string;
  blocks: Block[];
  showTopLine: boolean;
  showBottomLine: boolean;
};

export interface GroupProps {
  group: Group;
  titleClassName?: string;
  groupClassName?: string;
  blocksClassName?: string;
  blockClassName?: string;
}
