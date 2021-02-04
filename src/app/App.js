import './App.css';
import Header from '../header/Header';
import PayList from '../pay-list/PayList';

const payItems = [
  {day: '07', mounth: 'ЯНВ', year: '20', positive: 3000, negative: 543},
  {day: '23', mounth: 'ФЕВ', year: '20', positive: 5000, negative: 6015},
  {day: '31', mounth: 'МАР', year: '20', positive: 4000, negative: 5343},
  {day: '17', mounth: 'АПР', year: '20', positive: 7000, negative: 2043},
  {day: '12', mounth: 'АВГ', year: '20', positive: 8700, negative: 1000}
];

function App() {
  return (
    <>
      <Header />
      <PayList payItems={payItems} />
    </>
  );
}

export default App;