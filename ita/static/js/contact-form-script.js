/*==============================================================*/
// Contact Form  JS
/*==============================================================*/

const nombre=  document.getElementById('form-name');
const email=   document.getElementById('form-email');
const asunto=  document.getElementById('form-affair');
const telefono=document.getElementById('form-phone');
const mensaje= document.getElementById('form-message');

const nombreErr= document.getElementById('name-err');
const emailErr= document.getElementById('email-err');
const asuntoErr= document.getElementById('affair-err');
const telefonoErr= document.getElementById('phone-err');
const mensajeErr= document.getElementById('message-err');


nombre.addEventListener('focus', ()=> nombreErr.style.display = 'none')
email.addEventListener('focus', ()=> emailErr.style.display = 'none')
asunto.addEventListener('focus', ()=> asuntoErr.style.display = 'none')
telefono.addEventListener('focus', ()=> telefonoErr.style.display = 'none')
mensaje.addEventListener('focus', ()=> mensajeErr.style.display = 'none')

const btn = document.getElementById('contact-page_button');



$("#contactForm, #contactFormTwo").validator().on('submit', function(event) {

    event.preventDefault();

    btn.value = 'Enviando...';
    const serviceID = 'service_jzdvvif';
    const templateID = 'template_l3zw1dm';

    validate();

    if(event.isDefaultPrevented()) {

      if(validate()){
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              btn.value = 'Enviar email';
              formSuccess();
          
            }, (err) => {
                btn.value = 'Enviar email';
                formError();
                submitMSG(false, err);
              });
            
          }else{
            submitMSG(false, 'Complete el formulario');
          }
    }
    }); 

    

    function validate(){

     
      if( nombre.value.length <= 2 ){
        nombreErr.style.display='block'
        return false
      }
      else nombreErr.style.display='none'
        
      
      if( !isValidEmail(email.value) ){
        emailErr.style.display='block'
        return false
      }
      else emailErr.style.display='none'

      if( asunto.value.length < 5 ){
        asuntoErr.style.display='block'
        return false
      }
      else asuntoErr.style.display='none' 
      
      if( telefono.value.length < 5 ){
        telefonoErr.style.display='block'
        return false
      }
      else telefonoErr.style.display='none'

      if( mensaje.value.length < 10 ){
        mensajeErr.style.display='block'
        return false
      }
      else mensajeErr.style.display='none'
      return true
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










// (function ($) {
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