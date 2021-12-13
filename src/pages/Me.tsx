import classNames from 'classnames';
import styles from './styles/Me.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Me() {
  return (
    <div className={classNames(styles.main, 'section')}>
      <p className={styles.name}>kellsthepenguin</p>
      <FontAwesomeIcon icon={faGithub} className={styles.social}/>
      <FontAwesomeIcon icon={faEnvelope} className={styles.social} />
      <div className={styles.scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default Me;
