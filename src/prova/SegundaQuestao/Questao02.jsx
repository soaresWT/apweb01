import { useState } from "react";
import frente from "./frente.png";
import costa from "./virou.png";
const Questao02 = () => {
  //variavel para verificar se a carta está virada ou não
  const [virou, setVirou] = useState(false);
  //variavel para verificar qual imagem será exibida
  const [img, setImg] = useState(frente);

  //função para virar a carta
  const virar = () => {
    console.log("oii");
    if (virou == false) {
      setVirou(true);
      setImg(costa);
    } else {
      setVirou(false);
      setImg(frente);
    }
  };
  return (
    <div>
      <img style={{ width: "250px" }} src={img}></img>
      <button onClick={virar}>Virar</button>
    </div>
  );
};

export default Questao02;
