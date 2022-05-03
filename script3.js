const listen = event => {
  const p = document.createElement('h6');
  let s = document.getElementById('box').value
  p.innerText = "Reply by "+ localStorage.getItem('ls_alias') + ": " + s;
  document.querySelector('#container').appendChild(p);
}



const changeAlias = event => {
  let specialChars = /[^a-zA-Z0-9 ]/g;
  let s =  document.getElementById('box2').value;
      if (s.match(specialChars)) {
        alert ("Only characters A-Z, a-z and 0-9 are allowed!")
        return false;
    }
  localStorage.setItem("ls_alias", s
  )
}

const changeAge = event => {
     let s =  document.getElementById('box3').value;
  if(isNaN(s)){
    alert("age must be a number!")
    return false;
  }
  localStorage.setItem("ls_age", s);
  
}


