window.addEventListener("DOMContentLoaded", (event) => {
    const getBookingClass = document.querySelector(".book-now");
    const getFormClass = document.querySelector(".booking-form");
   getBookingClass.addEventListener("click", ()=>{
    getFormClass.classList.remove('hidden')
    let test = document.getElementById("alert");
   })

   const hideBookingForm = () =>{
    console.log()
   }

  

   const appointmentForm = document.getElementById('appointment-form');
   appointmentForm.addEventListener("submit", async(e)=>{
       e.preventDefault();
       let name = document.getElementById("name").value;
       let phone = document.getElementById("phone").value;
       let service = document.getElementById("service").value;
       let date = document.getElementById("date").value;
       let time = document.getElementById("time").value;
       let dataObj = {name, phone, service, prefferedDate:date, prefferedTime:time};
       console.log(dataObj)
      
      try {
        const data = await fetch("https://mysys-ooaz.onrender.com/api/requests", {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj),
           });
           const response = await data.json();
           console.log("data", response);
           if(response){
    
                setTimeout(()=>{
              let success =  document.getElementById("alert").innerText="Appointment Sent"
              document.querySelector('.alert').classList.add("bg-green-500");
              document.querySelector('.alert').classList.add("p-4");
              document.querySelector('.alert').classList.add("text-white");

               window.location.href ="index.html" || "/" 

                }, 3000)
               
            
           }
      } catch (error) {
        console.log("err", error)
      }
   })

  });