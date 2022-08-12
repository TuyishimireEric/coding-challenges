const encryption = (text) => {
  const newtext = text.replace(/\s+/g, '').split('');
  let row = ~~(Math.sqrt(newtext.length));
  let col = row + 1;
  if(newtext.length> (row*col)){
    row += 1;
    col = row;
  }
  let newArr = [];
  let nextArr = [];
  while(newtext.length > 0) {
	  newArr.push(newtext.splice(0,col));
  }
  for(let y=0; y<col; y++){
    for(let i=0; i<row; i++){
      nextArr.push(newArr[i][y]);
    }
    nextArr.push(' ');
  }
  
  console.log(nextArr.join(''));
}

encryption('haveaniceday ');
