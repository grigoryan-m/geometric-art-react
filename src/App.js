"use strict";
import './App.css';
import Row from './Row';
import React, { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const cells = document.getElementsByClassName("cell");
    const generateButton = document.getElementById("generateButton");

    const generate = function(){
      for(let cell of cells){
        let randomClass = Math.random() * 4;
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

        randomClass = Math.random() * 4;
      }
    }

    generateButton.addEventListener("click", generate);
    
    document.addEventListener("keydown", (event) => {
      if(event.key === "Space"){
        event.preventDefault();
        generate();
      }
    });
    
  });

  return (
    <div className="wrapper">
      <main className='panel'>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <button id="generateButton">Generate</button>
      </main> 
    </div>
  );
}

export default App;
