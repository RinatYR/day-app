import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';
import { useContext, useState } from 'react';
import { getDateNow, clearSymbol } from '../../utils/formUtils';

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

// const handlerInputText = (e) => {

//   /*ограничить длину ввода*/
// //  const value = e.target.value.length < 10 ? e.target.value : inputText;

// /*сжать пробелы */
// // const value = e.target.value.trim(); 
// //  setInputText(value);
// };

// let numOne = '';
// const numArr = [];
// const buttonClick = (e) =>{
//   numOne += e.target.innerText;
//   console.log(numOne);
// //   numArr.push(numOne);
// //   console.log(numArr[numArr.length-1]);
// //  // console.log(inputText)
// //   setInputText(numOne.length > inputText.length ? numOne : inputText);
//   return numOne
// };




  return (
    <>
      <Header />
      {/* <PayList payItems={payItems} /> */}
      <div>
          <input type="date" onInput={(e) => setDate(e.target.value)} value={date}/>
          <input type="text" onInput={(e) => setNegative(clearSymbol(e.target.value))} value={negative} placeholder="Введите расходы"/>
          <input type="text" onInput={(e) => setPositive(e.target.value)} value={positive} placeholder="Введите доходы"/>
          <button>Добавить</button>
      </div>
      {/* <input type="text" onInput={handlerInputText} value={inputText}/>
      <button class="num" onClick={buttonClick}>1</button> */}

    </>
  );
}

export default App;