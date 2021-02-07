/*
*Функция вывода текущей даты в формате YYYY-MM-DD
*/
export const getDateNow = () => {
    const dateNow = new Date();
    const year = dateNow.getFullYear() < 10 ? '0' + dateNow.getFullYear() : dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const month = monthNow < 10 ? '0' + monthNow : monthNow;
    const day = dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate();
    return `${year}-${month}-${day}` 
  }



  export const clearSymbol = (str, prevState) => {
    const num = Math.abs(parseInt(str));
    const result = (''+num).length < 10 ? num : prevState;
    return result ? result : '';  /*если num не число, то передаем 0, иначе num*/

  }


  export const MONTH_RU = [
         0,
        'ЯВН',
        'ФЕВ',
        'МАР',
        'АПР',
        'МАЙ',
        'ИЮН',
        'ИЮЛ',
        'АВГ',
        'СЕН',
        'ОКТ',
        'НОЯ',
        'ДЕК',

  ]