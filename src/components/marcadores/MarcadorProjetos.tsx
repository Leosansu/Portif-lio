type Props = { onClick?: () => void };

export default function MarcadorProjetos({ onClick }: Props) {
  return (
    <button className="marcador-projetos" onClick={onClick}>
      Projetos
    </button>
  );
}
