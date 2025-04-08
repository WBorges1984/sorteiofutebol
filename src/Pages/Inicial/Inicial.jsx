import React from "react";
import "./inicial.styles.css";
import logo from '../../assets/lg.png'
import MyButton from "../../components/myButton/MyButton";

export default function Inicial() {
  return (
    <section id="telaInicial">
      <div className="buttonInicial">
        <div>
          <img src={logo} alt="" />
          <h1>Fut Do Brisas</h1>
        </div>
        <MyButton text={"Acessar"} />
      </div>
    </section>
  );
}
