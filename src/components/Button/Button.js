import styles from '../Button/Button.module.css';

const Button = ({ fetchImages }) => (
  <button type="button" className={styles.Button} onClick={fetchImages}>
    Load more...
  </button>
);

export default Button;