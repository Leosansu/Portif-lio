import styles from './MarcadorSobre.module.css';

type Props = { onClick?: () => void };

export default function MarcadorSobre({ onClick }: Props) {
  return (
    <button className={styles.marcadorSobre} onClick={onClick}>
      Sobre
    </button>
  );
}
