/* 
* Функция возвращающая текущую дату в формате input с type="date"
*/
export const getDateNow = () => {
    const dateNow = new Date();

    const yearNow = dateNow.getFullYear();
    const mounthNow = dateNow.getMonth() + 1;
    const dayNow =  dateNow.getDate();

    const mounth = mounthNow < 10 ? '0' + mounthNow : mounthNow;
    const day = dayNow < 10 ? '0' + dayNow : dayNow;

    return `${yearNow}-${mounth}-${day}`;
}

export const clearSymbol = (str, prevState) => {
    const num = Math.abs(parseInt(str.replace('e', '')));
    const result = (''+num).length < 10 ? num : prevState;
    return isNaN(result) ? prevState : result;
}

export const MOUNT_RU = [
    0,
    'ЯНВ',
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