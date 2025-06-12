import Button from './Button'
import { useState } from 'react';
import {differences} from '../../data'

export default function DifferencesSection(){
    const [contentType, setContentType] =useState(null); 
      //let content ="Click the button";
      function handleClick(type) {
        //console.log(`Button clicked! Type: ${type}`);
        setContentType(type);
      }
    return(
    <section>
        <h3>Почему мы?</h3>
        <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
        <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
        <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

        {!contentType && <p>Click the button</p>}
        {contentType && <p>{differences[contentType]}</p>}
    </section>
    )
}