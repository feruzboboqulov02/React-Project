 import Header from './components/Header';
 import WayToTeach from './components/WayToTeach';
 import Button from './components/Button/Button';
 import {ways} from './data'

export default function App() {
  let content ="Click the button";
  function handleClick(type) {
    console.log(`Button clicked! Type: ${type}`);
    content = type;
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Как обучиться веб-разработке</h3>
          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Почему мы?</h3>
          <Button onClick={() => handleClick('way')}>Send</Button>
          <Button onClick={() => handleClick('easy')}>Learn More</Button>
          <Button onClick={() => handleClick('program')}>Contact Us</Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  )
}


