import React from "react";
import "./inicial.styles.css";
import logo from '../../assets/lg.png'
import MyButton from "../../components/myButton/MyButton";
import { useNavigate } from "react-router-dom";

export default function Inicial() {
  const navigate = useNavigate()
  return (
    <section id="telaInicial">
      <div className="bodyInicial">
        <div className="headerInicial">
          <img src={logo} alt="" />
          <h1>Fut Do Brisas</h1>
        </div>
        <div className="buttonInicial">
          <MyButton onclick={()=>navigate('principal')} text={"Acessar"} />
        </div>
      </div>
    </section>
  );
}
