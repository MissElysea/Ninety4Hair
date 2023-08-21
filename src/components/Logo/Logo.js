import styles from './Logo.module.scss';

const logoUrl = 'https://i.imgur.com/X2jOtpj.jpg';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <div>
      <img src={logoUrl} alt="ninety4hair logo" />
    </div>
  </div>
);
}