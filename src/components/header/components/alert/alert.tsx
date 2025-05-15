import { useHeaderContext } from '../../header.context';
import css from './alert.module.css';

export default function Alert() {
  const {
    config: { showAlert, alertCss, alertMessage },
  } = useHeaderContext();

  if (!showAlert) return null;

  return <div className={css.Alert} style={alertCss} dangerouslySetInnerHTML={{ __html: alertMessage }} />;
}

Alert.displayName = 'HeaderAlert';
