//Bogosort 

//Porque puedo B) 

// By mahc30 

let arr = [1,11,10, 12, 13, 14]; 

arrlen = arr.length; 

 

let shuffle = (arr) => { 

  let temp; 

  let rand; 

  let min = 0; 

   

  for(let i = 0; i < arrlen; i++){ 

    rand = Math.random() * (arrlen - min) + min; 

    rand = Math.floor(rand) 

     

    temp = arr[i]; 

    arr[i] = arr[rand] 

    arr[rand] = temp; 

  } 

   

  return arr; 

} 

 

let isSorted = (arr) => { 

  for(let i = 0; i < arrlen; i++){ 

    if(arr[i] > arr[i+1]){ 

      return false; 

    } 

  } 

  return true; 

} 

 

let sort = (arr) => { 

 

  while(!isSorted(arr)){ 

    arr = shuffle(arr); 

    console.log(arr); 

  } 

   

   

  console.log("sorted!"); 

} 

 

sort(arr); 
