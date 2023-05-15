import { useState } from "react";
import Questao01B from "./Questao01B";
const Questao01a = () => {
  const [media, setMedia] = useState([]);

  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];
  //criando função para se comunicar com o filho
  const comunicaFilho = (medias) => {
    setMedia(medias);
  };

  return (
    <div>
      <Questao01B setarMedias={comunicaFilho} alunos={alunos}></Questao01B>
      <div>
        {/* usando o map para percorrer o objeto de alunos e verificando as medias*/}
        {media.map((aluno) => (
          <p>{aluno.media >= 6 ? aluno.nome : ""}</p>
        ))}
      </div>
    </div>
  );
};

export default Questao01a;
