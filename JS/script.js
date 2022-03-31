
const getStr = 'background-color-size-flex';

const arr = getStr.split('-');
console.log(arr)
let changeStr = (item) => {
    let firstLetterArr = item.map((item, index) => (index == 0) ? item[0] : item[0].toUpperCase());
    // console.log(firstLetterArr)
    return (item.map ((item, index) => firstLetterArr[index] + item.substring(1))).join('')
}

console.log(changeStr(arr))