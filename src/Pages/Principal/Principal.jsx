import { BsReplyAllFill } from "react-icons/bs";
import "./principal.styles.css";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/myButton/MyButton";
import { GrAdd } from "react-icons/gr";

export default function Principal() {
  const navigate = useNavigate();
  return (
    <section id="telaPrincipal">
      <header className="headerPrincipal">
        <BsReplyAllFill onClick={() => navigate(-1)} size={50} />
        <h1>Fut Do Brisas</h1>
      </header>
      <div className="bodyPrincipal">

        <div className="nrJogadores">
          <h3>Nr de Jogadores:</h3>
          <input type="number" name="" id="" />
        </div>

        <div className="nrJogadores">
          <h3>Jogadores por time:</h3>
          <input type="number" name="" id="" />
        </div>

        <div className="nomeJogador">
          <div className="jogadores">
            <h3>Nome dos Jogadores</h3>
            <input type="text" name="" id="" />
            <div className="goleiroSwith">
              <h4>Goleiro?</h4>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="buttonJogadores">
            <button type="button">
              <GrAdd color="#FF6B2B" />
            </button>
          </div>
        </div>
        <div className="listaJogadoresButton">
          <div className="listaJogadores">
            <textarea name="" id="" cols="30"></textarea>
          </div>
          <div className="listaButton">
            <MyButton text={"Sortear"} onclick={() => navigate('/times')} />
          </div>
        </div>
      </div>
    </section>
  );
}
