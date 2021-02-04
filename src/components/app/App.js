import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';
import { useState } from 'react';
import { getDateNow, clearSymbol, MOUNT_RU } from '../../utils/formUtils';

const payItems = [
  {day: '07', mounth: 'ЯНВ', year: '20', positive: 3000, negative: 543},
  {day: '23', mounth: 'ФЕВ', year: '20', positive: 5000, negative: 6015},
  {day: '31', mounth: 'МАР', year: '20', positive: 4000, negative: 5343},
  {day: '17', mounth: 'АПР', year: '20', positive: 7000, negative: 2043},
  {day: '12', mounth: 'АВГ', year: '20', positive: 8700, negative: 1000}
];

function App() {
  // Стейт даты
  const [date, setDate] = useState(getDateNow()); //YYYY-MM-DD
  // Стейт расхода
  const [negative, setNegative] = useState('');
  // Стейт дохода
  const [positive, setPositive] = useState('');
  
  const handlerAddDay = () => {
    const dateParse = date.split('-');
    const day = dateParse[2];
    const mounth = MOUNT_RU[parseInt(dateParse[1])];
    const year = dateParse[0].slice(2);

    const result = {day, mounth, year, positive, negative};
    console.log(result);
  }

  return (
    <>
      <Header />
      {/* <PayList payItems={payItems} /> */}
      <div>
        <input type="date" onInput={(e)=>setDate(e.target.value)} value={date}/>
        <input type="text" onInput={(e)=>setNegative(clearSymbol(e.target.value, negative))} value={negative} placeholder="Введите расходы" />
        <input type="text" onInput={(e)=>setPositive(clearSymbol(e.target.value, positive))} value={positive} placeholder="Введите доходы" />
        <button onClick={handlerAddDay}>Добавить</button>
      </div>
    </>
  );
}
 

export default App;
