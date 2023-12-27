const subsBtn = document.querySelector("#sub-btn");

const dissBtn = document.querySelector("#diss-btn");



subsBtn.addEventListener("click", ()=>{
   const emailInput =document.querySelector("#email");
   let emailValue = emailInput.value;

   let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   let itsValid = expReg.test(emailValue);
      
   if(itsValid === true){
      const frontCont = document.querySelector(".front-container");
      const backCont = document.querySelector(".back-container");
   
      frontCont.style = "display: none"
      backCont.style = "display: block"
   } else {
      let invalidEmail = document.querySelector(".invalid-email");
      invalidEmail.classList.add("visible")
      
      let inputBox = document.querySelector("#email");
      inputBox.classList.add("invalid-box")
   }
});

dissBtn.addEventListener("click", ()=>{
   location.reload()
})



