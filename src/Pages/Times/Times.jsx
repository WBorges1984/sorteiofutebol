import { BsReplyAllFill } from "react-icons/bs";
import "./times.styles.css";
import SelectedTimes from "../../components/SelectedTimes/SelectedTimes";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/myButton/MyButton";

export default function Times() {
  const navigate = useNavigate();
  return (
    <section id="telaTimes">
      <header className="headerTimes">
        <BsReplyAllFill onClick={() => navigate(-1)} size={50} />
        <div>
          <h1>Fut Do Brisas</h1>
          <h3>Times</h3>
        </div>
      </header>

      <div className="times">
        <SelectedTimes />
        <SelectedTimes />
        <SelectedTimes />
        <SelectedTimes />
        <SelectedTimes />
        <SelectedTimes />

      </div>
      <MyButton text={'Reiniciar'} onclick={()=>navigate('/')}/>
    </section>
  );
}
