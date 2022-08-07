/*==============================================================*/
// Contact Form  JS
/*==============================================================*/


const email=   document.getElementById('form-email');
const area=  document.getElementById('selectInputValue');
const telefono=document.getElementById('form-phone');
const mensaje= document.getElementById('form-message');
const formulario= document.getElementById('contactFormTwo');


const emailErr= document.getElementById('email-err');
const areaErr= document.getElementById('area-err');
const telefonoErr= document.getElementById('phone-err');
const mensajeErr= document.getElementById('message-err');



email.addEventListener('focus', ()=> emailErr.style.display = 'none')
area.addEventListener('focus', ()=> areaErr.style.display = 'none')
telefono.addEventListener('focus', ()=> telefonoErr.style.display = 'none')
mensaje.addEventListener('focus', ()=> mensajeErr.style.display = 'none')

const btn = document.getElementById('contact-page_button');


$("#contactFormTwo").validator().on('submit', function(event) {
  
      event.preventDefault();
  
  
  const serviceID = 'service_jzdvvif';
    const templateID = 'template_l3zw1dm';
  
    
    validate();
    
    if(event.isDefaultPrevented()) {
      
      if(validate()){
        
        btn.innerHTML = 'Enviando...';
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.innerHTML = 'Enviar email';
            formSuccess();
            
          }, (err) => {
                btn.innerHTML = 'Enviar email';
                formError();
                submitMSG(false, err);
              });
            
          }else{
            submitMSG(false, 'Complete el formulario');
          }
    }
  }); 

    

    function validate(){


        
      
      if( !isValidEmail(email.value) ){
        emailErr.style.display='block'
        return false
      }
      else emailErr.style.display='none'

      // if( area.value.length < 3 || area.value.length > 4 ||  !area.value.includes('+')){
      //   areaErr.style.display='block'
      //   return false
      // }
      // else areaErr.style.display='none' 
      
      // if( telefono.value.length < 5 ){
      //   telefonoErr.style.display='block'
      //   return false
      // }
      // else telefonoErr.style.display='none'

      // if( mensaje.value.length < 10 ){
      //   mensajeErr.style.display='block'
      //   return false
      // }
      // else mensajeErr.style.display='none'
      // return true
    }




    function formSuccess(){
      // $("#contactForm, #contactFormTwo")[0].reset();
      const formTwo = document.getElementById('contactFormTwo');
      const contactForm = document.getElementById('contactForm');

      if(formTwo){
        formTwo.reset();
      }
      
      if(contactForm){
        contactForm.reset();
      }
      submitMSG(true, "Mensaje enviado");
  }


  function formError(){
      $("#contactForm, #contactFormTwo").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
      });
  }

  async function submitMSG(valid, msg){
      if(valid){
          var msgClasses = "h4 tada animated text-success";
      } 
      else {
          var msgClasses = "h4 text-danger";
      }
      $("#msgSubmit, #msgSubmitTwo").removeClass().addClass(msgClasses).text(msg);
      
      setTimeout(()=>{
        
        $("#msgSubmit, #msgSubmitTwo").removeClass(msgClasses).text('');
      },4000)
  }


function isValidEmail(email) {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      return match;
  };






// 
//     "use strict"; // Start of use strict
//     $("#contactForm, #contactFormTwo").validator().on("submit", function (event) {
//         event.preventDefault();

//         try {
//             console.log(error);
//             submitForm();
            
//         } catch (error) {
            
//             console.log(error);
//             formError();
//             submitMSG(false, "Did you fill in the form properly?");
//         }
    
//         // if (event.isDefaultPrevented()) {
//         // } 
//         // else {
//         // }
//     });

//     function submitForm(){
//         // Initiate Variables With Form Content
//         var name = $("#name").val();
//         var email = $("#email").val();
//         var msg_subject = $("#msg_subject").val();
//         var phone_number = $("#phone_number").val();
//         var message = $("#message").val();

//         $.ajax({
//             type: "POST",
//             url: "assets/php/form-process.php",
//             data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
//             success : function(text){
//                 if (text == "success"){
//                     formSuccess();
//                 } 
//                 else {
//                     formError();
//                     submitMSG(false,text);
//                 }
//             }
//         });
//     }


//     function formSuccess(){
//         $("#contactForm, #contactFormTwo")[0].reset();
//         submitMSG(true, "Mensaje enviado")
//     }


//     function formError(){
//         $("#contactForm, #contactFormTwo").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//             $(this).removeClass();
//         });
//     }

//     function submitMSG(valid, msg){
//         if(valid){
//             var msgClasses = "h4 tada animated text-success";
//         } 
//         else {
//             var msgClasses = "h4 text-danger";
//         }
//         $("#msgSubmit, #msgSubmitTwo").removeClass().addClass(msgClasses).text(msg);
//     }
// }(jQuery)); // End of use strict