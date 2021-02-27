function transpose(arr_mat){

  let res = []

  for(let i = 0; i < arr_mat.length; i++){
    let resitem = []
    for(let j = 0; j < arr_mat[i].length; j++){
      console.log(arr_mat[i][i])
      resitem.push(arr_mat[i][i])
    }
    res.push(resitem)
  }

  return res
}

let input = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]

console.log(transpose(input))
