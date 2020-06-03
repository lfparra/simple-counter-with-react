import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Main} from './componentes/main'
import './index.css';

let num1=0;
let num2=0;
let num3=0;
let num4=0;
let num5=0;
let num6=0;

const prueba = ()=>{
  num1 +=1;
  if(num1 === 10){
    num1 = 0;
    num2 +=1;
  }
  if(num2 === 6){
    num2 = 0;
    num3 +=1;
  }
  if(num3 === 10){
    num3 = 0;
    num4 +=1;
  }
  if(num4 === 6){
    num4 = 0;
    num5 +=1;
  }
  if(num5 === 10){
    num5 = 0;
    num6 +=1;
  }
  if (num6 === 2 && num5 === 4){
    num6=0;
    num5=0;
  }

  ReactDOM.render(
    <React.StrictMode>
      <Main num1={num1} num2={num2} num3={num3} num4={num4} num5={num5} num6={num6} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

setInterval(prueba, 1000)

