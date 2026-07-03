type Props = { onClick?: () => void };

export default function MarcadorContatos({ onClick }: Props) {
  return (
    <button className="marcador-contatos" onClick={onClick}>
      Contatos
    </button>
  );
}
