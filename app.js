let navMenu = document.getElementById("navMenu");
let navIcon = document.getElementById("navIcon");

navIcon.addEventListener('click',()=>
{
navMenu.classList.toggle('active');
navIcon.classList.toggle('active');
});

navMenu.addEventListener('click',()=>
  
  {
navMenu.classList.remove('active');
navIcon.classList.remove('active');
}



)



//FORM VALIDATION CODE START HERE
const nAME = document.getElementById("name"),
      eMAIL = document.getElementById("email"),
      bUDGET = document.getElementById("budget"),
      fMESSAGE = document.getElementById("message"),
      fORM = document.getElementById("cONTACT"),
      fORMeRROR = document.getElementById("fORMeRROR");


fORM.addEventListener("submit", (e)=>
  
  {
if(nAME.value === "" || eMAIL.value ==="" || bUDGET.value ==="" || fMESSAGE.value==="")
{
  e.preventDefault();
  fORMeRROR.innerHTML = "You've not fill the form properly, kindly fill the empty space";
}




})
