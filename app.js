window.addEventListener("DOMContentLoaded", (event) => {
    const getBookingClass = document.querySelector(".book-now");
    const getFormClass = document.querySelector(".booking-form");
   getBookingClass.addEventListener("click", ()=>{
    getFormClass.classList.remove('hidden')
   })

   const hideBookingForm = () =>{
    console.log()
   }


  });