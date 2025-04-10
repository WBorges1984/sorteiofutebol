import './selectedTimes.styles.css'

export default function SelectedTimes() {
  return (
    <article id='card'>
      <h3>Time A</h3>
      <div className="card">
        <ol start={1}>
          <li>1. Brendon</li>
          <li>2. Matheus</li>
          <li>3. Pedro</li>
          <li>4. Danrley</li>
        </ol>
      </div>
    </article>
  );
}
