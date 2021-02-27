function triangle(str){

  let arr = Array.from(str)

  let triar = []

  let str1 = ''

  for(let i = 1; i <= 5; i++){
    let spaces = [];
    str1 = arr.splice(0, i).join(' ').toString()
      for(let y = 1; y <= 5 - i; y++){
        spaces.push(' ')
      }
    spaces.push(str1)

      for(let y = 1; y <= 5 - i; y++){
        spaces.push(' ')
      }

    triar.push(spaces)
  }

  triar.forEach((item, i) => {
    console.log(item.join(''))
  });


  return 'Input: ' + str;
}

triangle('dumbwaysidujian')
