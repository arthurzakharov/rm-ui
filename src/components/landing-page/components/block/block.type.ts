import type { AccordionProps } from '../accordion';
import type { AdvantagesProps } from '../advantages';
import type { ContactProps } from '../contact';
import type { CtaButtonProps } from '../cta-button';
import type { HowToProps } from '../how-to';
import type { LogoBoardProps } from '../logo-board';
import type { PlayerProps } from '../player';
import type { ReviewProps } from '../review';
import type { OrderedListProps } from '../ordered-list';
import type { LogosProps } from '../../../logos';
import BLOCK from './block.enum';

type BlockObject<T, P = null, C = null> = {
  type: T;
  props: P;
  content: C;
};

export type Block =
  | BlockObject<BLOCK.ACCORDION, AccordionProps>
  | BlockObject<BLOCK.ADVANTAGE_LIST, AdvantagesProps>
  | BlockObject<BLOCK.ADVANTAGE_LIST_NO_BUTTON, AdvantagesProps>
  | BlockObject<BLOCK.CONTACT_US, ContactProps>
  | BlockObject<BLOCK.BUTTON, CtaButtonProps>
  | BlockObject<BLOCK.HOW_TO_GO_NEXT, HowToProps>
  | BlockObject<BLOCK.LOGO_CLOUD, LogoBoardProps>
  | BlockObject<BLOCK.PLAYER, PlayerProps>
  | BlockObject<BLOCK.REVIEW, ReviewProps>
  | BlockObject<BLOCK.ORDERED_LIST, OrderedListProps>
  | BlockObject<BLOCK.LOGOS, LogosProps>
  | BlockObject<BLOCK.QUESTION, null, string>;

export interface BlockProps {
  block: Block;
}
