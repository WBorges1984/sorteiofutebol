import React from "react";
import logo from "../../assets/lg.png";
import "./inicial.styles.css";
import MyButton from "../../components/myButton/MyButton";

export default function Inicial() {
  return (
    <section id="telaInicial">
      <div className="buttonInicial">
        <MyButton text={"Acessar"} />
      </div>
    </section>
  );
}
