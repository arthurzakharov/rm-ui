import type { Group } from '../group';
import type { SuccessBoxProps } from '../success-box';

export interface MainProps {
  successBox: SuccessBoxProps;
  groups: Array<Group>;
}
