 import Header from './components/Header';
 import WayToTeach from './components/WayToTeach';
 import Button from './components/Button/Button';
 import {ways,differences} from './data'
 import {useState} from 'react';

export default function App() {
  const [contentType, setContentType] =useState(null); 
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
            {ways.map((way)=>(<WayToTeach key={way.title}{...way}/>))}
          </ul>
        </section>
        <section>
          <h3>Почему мы?</h3>
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>


          {/* {contentType?( 
          <p>{differences[contentType]}</p>
          ):(<p>Click the button</p>)} */}

          {/* {!contentType ? <p>Click the button</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          {!contentType && <p>Click the button</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  )
}


