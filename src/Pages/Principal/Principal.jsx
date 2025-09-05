import { BsReplyAllFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import "./principal.styles.css";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/myButton/MyButton";
import { GrAdd } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Principal() {
  const navigate = useNavigate();

  const [jogadores, setJogadores] = useState([]);
  const [nomeJogador, setNomeJogador] = useState("");
  const [numPlayers, setNumPlayers] = useState(0);
  const [playersPerTeam, setPlayersPerTeam] = useState(0);

  const handleAddPlayer = () => {
    if (nomeJogador.trim() !== "") {
      setJogadores([...jogadores, nomeJogador]);
      setNomeJogador("");
    }
  };

  useEffect(() => {
    console.log(jogadores);
  }, [jogadores]);

  // Formata a lista de jogadores com numeração
  const jogadoresFormatados = jogadores.map((jogador, index) => {
    return `${index + 1}. ${jogador}`;
  }).join("\n");

  return (
    <section id="telaPrincipal">
      <header className="headerPrincipal">
        <BsReplyAllFill onClick={() => navigate(-1)} size={50} />
        <h1>Fut Do Brisas</h1>
      </header>
      <div className="bodyPrincipal">
        <div className="NumPlayers">
          <div className="nrJogadores">
            <h3>Nr Jogadores:</h3>
            <input type="number" onChange={(e) => setNumPlayers(e.target.value)} />
          </div>

          <div className="nrJogadores">
            <h3>Jogadores por Time:</h3>
            <input type="number" onChange={(e) => setPlayersPerTeam(e.target.value)} />
          </div>
        </div>

        <div className="nomeJogador">
          <div className="jogadores">
            <h3>Nome dos Jogadores</h3>
            <input type="text" onChange={(e) => setNomeJogador(e.target.value)} value={nomeJogador} />
          </div>
          <div className="buttonJogadores">
            <button type="button" onClick={() => { handleAddPlayer() }}>
              <MdGroupAdd size={40} color="#FF6B2B" />
            </button>
          </div>
        </div>
        <div className="listaJogadoresButton">
          <div className="listaJogadores">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={jogadoresFormatados}
              readOnly
            ></textarea>
          </div>
          <div className="listaButton">
            <MyButton text={"Sortear"} onclick={() => navigate('/times')} />
          </div>
        </div>
      </div>
    </section>
  );
}