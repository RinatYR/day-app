import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';
import { useContext, useState } from 'react';

const payItems = [
  {day: '07', mounth: 'ЯНВ', year: '20', positive: 3000, negative: 543},
  {day: '23', mounth: 'ФЕВ', year: '20', positive: 5000, negative: 6015},
  {day: '31', mounth: 'МАР', year: '20', positive: 4000, negative: 5343},
  {day: '17', mounth: 'АПР', year: '20', positive: 7000, negative: 2043},
  {day: '12', mounth: 'АВГ', year: '20', positive: 8700, negative: 1000}
];


function getDateNow(){
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear() < 10 ? '0' + dateNow.getFullYear() : dateNow.getFullYear();
  const monthNow = dateNow.getMonth() < 10 ? '0' + dateNow.getMonth() : dateNow.getMonth();
  const dayNow = dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate();
  return `${yearNow}-${monthNow}-${dayNow}`

}


function App() {


  
  
  const [date, setDate] = useState(getDateNow());

const handlerInputText = (e) => {

  /*ограничить длину ввода*/
//  const value = e.target.value.length < 10 ? e.target.value : inputText;

/*сжать пробелы */
// const value = e.target.value.trim(); 
//  setInputText(value);
};

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
          <input type="text" onInput={(e) => console.log(e.target.value)}/>
          <input type="text" onInput={(e) => console.log(e.target.value)}/>

      </div>
      {/* <input type="text" onInput={handlerInputText} value={inputText}/>
      <button class="num" onClick={buttonClick}>1</button> */}

    </>
  );
}

export default App;