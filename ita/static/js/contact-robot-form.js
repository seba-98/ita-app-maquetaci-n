/*==============================================================*/
// Contact Form  JS
/*==============================================================*/
(function ($) {

const robotEmail= document.getElementById('robotEmailInput');
const robotArea= document.getElementById('robotAreaInput');
const robotPhone= document.getElementById('robotPhoneInput');
const robotWeb= document.getElementById('robotWebInput');


const emailErr= document.getElementById('roboErrEmail');
const areaErr= document.getElementById('roboErrArea');
const phoneErr= document.getElementById('roboErrPhone');
const webErr= document.getElementById('roboErrWeb');



robotEmail.addEventListener('focus', ()=> emailErr.style.display = 'none')
robotArea.addEventListener('focus', ()=> areaErr.style.display = 'none')
robotPhone.addEventListener('focus', ()=> phoneErr.style.display = 'none')
robotWeb.addEventListener('focus', ()=> webErr.style.display = 'none')

const btn = document.getElementById('robot-btn');
const success = document.getElementById('successAlert');







$("#robotForm").validator().on('submit', function(event) {

    event.preventDefault();

    btn.innerHTML = 'Enviando...';
    const serviceID = 'service_jzdvvif';
    const templateID = 'template_9cfekpi';

    validate();

    if(event.isDefaultPrevented()) {

      if(validate()){
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              btn.innerHTML = 'Enviar email';
              formSuccess();
              success.style.display='block'
              
            }, (err) => {
              btn.innerHTML = 'Enviar email';
              formError();
              submitMSG(false, err);
              success.style.display='block'
              success.innerHTML = 'Hubo un error al enviar';
              });
            
          }else{
            submitMSG(false, 'Complete el formulario');
          }
          setTimeout(()=>success.style.display='none',5000)
    }
  }); 

    

    function validate(){

     
      if( !isValidEmail(robotEmail.value) ){
        emailErr.style.display='block'
        return false
      }
      else emailErr.style.display='none'

      if( robotArea.value.length < 3 || robotArea.value.length > 4 ||  !robotArea.value.includes('+') ){
        areaErr.style.display='block'
        return false
      }
      else areaErr.style.display='none' 
      
      if( robotPhone.value.length < 5 ){
        phoneErr.style.display='block'
        return false
      }
      else phoneErr.style.display='none'

      if( robotWeb.value.length < 10 ){
        webErr.style.display='block'
        return false
      }
      else webErr.style.display='none'
      return true
    }


    function formSuccess(){
      // $("#contactForm, #contactFormTwo")[0].reset();
      const form = document.getElementById('robotForm');

      if(form){
        form.reset();
      }
      
      if(form){
        form.reset();
      }
      submitMSG(true, "Mensaje enviado");
  }
  function formError(){
      $("#robotForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
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


}(jQuery));







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