"use strict";
import './App.css';
import Row from './Row';
import React, { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const cells = document.getElementsByClassName("cell");
    let randomClass;

    for(let cell of cells){
      randomClass = Math.random() * 4;
      randomClass = Math.round(randomClass);
      cell.classList = "cell";
      if(randomClass === 0){
        cell.classList.add("tl");
      }else if(randomClass === 1){
        cell.classList.add("tr");
      }else if(randomClass === 2){
        cell.classList.add("bl");
      }else if(randomClass === 3){
        cell.classList.add("br");
      }else if(randomClass === 4){
        cell.classList.add("all");
      }
    }
  });

  return (
    <div className="wrapper">
      <main className='panel'>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </main> 
    </div>
  );
}

export default App;
