function quest01(number) {
  
  for (let countline = 0; countline < number; countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn < number; countcolumn+=1) {
      line += "*"
      
    }    
    console.log(line)
  }
}

function quest02(number) {
  
  for (let countline = 0; countline < number; countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn <= countline; countcolumn+=1) {
      line += "*"      
    }    
    console.log(line)
  }
}

quest02(5)