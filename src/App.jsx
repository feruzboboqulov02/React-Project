 import Header from './components/Header';
 import WayToTeach from './components/WayToTeach';
 import Button from './components/Button/Button';
 import {ways,differences} from './data'
 import {useState} from 'react';

export default function App() {
  const [contentType, setContentType] =useState("Click the button");
  //let content ="Click the button";
  function handleClick(type) {
    //console.log(`Button clicked! Type: ${type}`);
    setContentType(type);
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
          <Button onClick={() => handleClick('way')}>Подход</Button>
          <Button onClick={() => handleClick('easy')}>Доступность</Button>
          <Button onClick={() => handleClick('program')}>Концентрация</Button>
          <p>{differences[contentType]}</p>
        </section>
      </main>
    </div>
  )
}


