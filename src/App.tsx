import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC  = ()=> {
  return (
    <>
      <Character name ={'bart'}
                 image ={'https://w7.pngwing.com/pngs/229/576/png-transparent-bart-simpson-illustration-bart-simpson-animation-bart-simpson-free-hand-cartoon-graphic-arts-thumbnail.png'}
      />
      <Character name ={'homer'}
                 image ={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
      />
        <Character name ={'marge'}
                   image ={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged.
        </Character>
    </>
  );
}

export default App;
