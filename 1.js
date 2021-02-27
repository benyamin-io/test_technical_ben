function isPolindrom(num){

  let x = 0;

  rev_num = Array.from(num.toString()).map((item, i, arr) => {
    x += 1;
    return arr[num.toString().length - x];
  }).join('');

  if(num == parseInt(rev_num)){
    return num + ' merupakan bilangan polindrom'
  }else{
    return num + ' bukan bilangan polindrom'
  }
}

console.log(isPolindrom(123))
console.log(isPolindrom(1001))
console.log(isPolindrom(16461))
