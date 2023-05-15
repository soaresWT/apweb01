function Questao01B(props) {
  //desestruturando props
  const { setarMedias, alunos } = props;

  //calculando as medias
  const calcular_medias = () => {
    //criado objeto aluno com nome e media
    const medias = alunos.map((aluno) => {
      const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
      return { nome: aluno.nome, media };
    });
    setarMedias(medias);
  };

  return (
    <div>
      <button onClick={calcular_medias}>Calcular médias</button>
    </div>
  );
}

export default Questao01B;
