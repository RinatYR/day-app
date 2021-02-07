/*
*Функция вывода текущей даты в формате YYYY-MM-DD
*/
export const getDateNow = () => {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear() < 10 ? '0' + dateNow.getFullYear() : dateNow.getFullYear();
    const monthNow = dateNow.getMonth() < 10 ? '0' + dateNow.getMonth() : dateNow.getMonth();
    const dayNow = dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate();
    return `${yearNow}-${monthNow}-${dayNow}` 
  }



  export const clearSymbol = (str) => {

    const num = Math.abs(parseInt(str));
    return num ? num : '';  /*если num не число, то передаем 0, иначе num*/

  }