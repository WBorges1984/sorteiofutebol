import './MyButton.styles.css'

export default function MyButton({text, onclick}) {
  return (
    <button onClick={onclick} id='btnInicial'><h4>{text}</h4></button>
  )
}
