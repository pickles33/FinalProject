function validateForm() {
  var specialChars = /[^a-zA-Z0-9 ]/g;
  let alias = document.forms["myForm"]["alias"].value;
  let fav = document.forms["myForm"]["fav"].value;
  let age = document.forms["myForm"]["age"].value;
  let icecream = document.forms["myForm"]["icecream"].value;
  let pet = document.forms["myForm"]["pet"].value;

  




  
    if (alias.match(specialChars) || fav.match(specialChars)) {
        alert ("Only characters A-Z, a-z and 0-9 are allowed!")
        return false;
    }
  else if(isNaN(age)){
    alert("age must be a number!")
    return false;
  }
  
    else  {



localStorage.setItem('ls_alias', alias);
localStorage.setItem('ls_fav', fav);
localStorage.setItem('ls_age', age);
localStorage.setItem('ls_pet', pet);
localStorage.setItem('ls_icecream', icecream);
localStorage.setItem('noFirstVisit', 0);

return true;

      
    }

  

  
}