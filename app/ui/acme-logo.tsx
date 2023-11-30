import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import styles from './home.module.css';

export default function AcmeLogo() {
  return (
    <div
      className={` ${styles.acmelogo} ${lusitana.className}`}
    >
      <GlobeAltIcon className= {styles.globealticon} />
      <p className={styles.acme}>Acme</p>
    </div>
  );
}
