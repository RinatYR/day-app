import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';
import { useContext, useState } from 'react';
import { getDateNow, clearSymbol, MONTH_RU } from '../../utils/formUtils';

const payItems = [
  {day: '07', mounth: 'ЯНВ', year: '20', positive: 3000, negative: 543},
  {day: '23', mounth: 'ФЕВ', year: '20', positive: 5000, negative: 6015},
  {day: '31', mounth: 'МАР', year: '20', positive: 4000, negative: 5343},
  {day: '17', mounth: 'АПР', year: '20', positive: 7000, negative: 2043},
  {day: '12', mounth: 'АВГ', year: '20', positive: 8700, negative: 1000}
];





function App() {

  /*Стейт даты   */
const [date, setDate] = useState(getDateNow());

/*Стейт расхода   */
const [negative, setNegative] = useState('');

/*Стейт дохода   */
const [positive, setPositive] = useState('');


const handlerAddDay = () =>{

  const dateParse = date.split('-');
  const day = dateParse[2];
  const mounth = MONTH_RU[parseInt(dateParse[1])];
  const year = dateParse[0].slice(2);
  const result = {day , mounth, year , positive, negative};
  console.log(result);
}




// const handlerInputText = (e) => {

//   /*ограничить длину ввода*/
// //  const value = e.target.value.length < 10 ? e.target.value : inputText;

// /*сжать пробелы */
// // const value = e.target.value.trim(); 
// //  setInputText(value);
// };

const [textH1, setTextH1] = useState('00');
let numOne = '';
//const numArr = [];
function buttonClick(e){
 numOne += e.target.innerText;
 console.log(numOne);
 //setTextH1(sendToSet);
//   numArr.push(numOne);
//   console.log(numArr[numArr.length-1]);
// setTextH1(numOne.length >= textH1.length ? numOne : textH1);
setTextH1(numOne)
};

  return (
    <>
      <Header />
      {/* <PayList payItems={payItems} /> */}
      <div className="main__form">
      <div className="input__form">
          <input className="input__item input_text" type="text" onInput={(e) => setNegative(clearSymbol(e.target.value, negative))} value={negative} placeholder="Введите расходы"/>
          <input className="input__item input_text" type="text" onInput={(e) => setPositive(clearSymbol(e.target.value, positive))} value={positive} placeholder="Введите доходы"/>
          <input className="input__item input_date" type="date" onInput={(e) => setDate(e.target.value)} value={date}/>
      </div>
      <button className="main__button" onClick={handlerAddDay}>Внести</button>
      </div>
      {/* <input type="text" onInput={handlerInputText} value={inputText}/> */}
      <div className="calc__table">
      <h1>{textH1}</h1>
      <div>
      <button className="num" onClick={buttonClick}>1</button>
      <button className="num" onClick={buttonClick}>2</button>
      <button className="num" onClick={buttonClick}>3</button>
      </div>
      <div>
      <button className="num" onClick={buttonClick}>4</button>
      <button className="num" onClick={buttonClick}>5</button>
      <button className="num" onClick={buttonClick}>6</button>
      </div>
      <div>
      <button className="num" onClick={buttonClick}>7</button>
      <button className="num" onClick={buttonClick}>8</button>
      <button className="num" onClick={buttonClick}>9</button>
      </div>
      <div>
      <button className="num" onClick={buttonClick}>+</button>
      <button className="num" onClick={buttonClick}>0</button>
      <button className="num" onClick={buttonClick}>-</button>
      </div>
      </div>
    </>
  );
}

export default App;