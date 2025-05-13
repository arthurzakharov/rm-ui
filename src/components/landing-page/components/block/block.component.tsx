import type { BlockProps } from './block.type';
import Accordion from '../accordion';
import Advantages from '../advantages';
import Contact from '../contact';
import CtaButton from '../cta-button';
import HowTo from '../how-to';
import LogoBoard from '../logo-board';
import Player from '../player';
import Review from '../review';
import OrderedList from '../ordered-list';
import Logos from '../../../logos';
import BLOCK from './block.enum';
import css from './block.module.css';

export default function Block(props: BlockProps) {
  const { block } = props;

  switch (block.type) {
    case BLOCK.ACCORDION:
      return <Accordion {...block.props} />;
    case BLOCK.ADVANTAGE_LIST:
      return <Advantages {...block.props} withImage />;
    case BLOCK.ADVANTAGE_LIST_NO_BUTTON:
      return <Advantages {...block.props} withoutButton />;
    case BLOCK.CONTACT_US:
      return <Contact {...block.props} />;
    case BLOCK.BUTTON:
      return <CtaButton {...block.props} />;
    case BLOCK.HOW_TO_GO_NEXT:
      return <HowTo {...block.props} />;
    case BLOCK.LOGO_CLOUD:
      return <LogoBoard {...block.props} />;
    case BLOCK.PLAYER:
      return <Player {...block.props} />;
    case BLOCK.REVIEW:
      return <Review {...block.props} />;
    case BLOCK.ORDERED_LIST:
      return <OrderedList {...block.props} />;
    case BLOCK.LOGOS:
      return <Logos {...block.props} />;
    case BLOCK.QUESTION:
      return <div className={css.Block} dangerouslySetInnerHTML={{ __html: block.content }} />;
  }
}

Block.displayName = 'LandingPageBlock';
