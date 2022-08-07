/*==============================================================*/
// Contact Form  JS
/*==============================================================*/


const sidebarEmail= document.getElementById('form-sidebar-email');
const sidebarArea= document.getElementById('selectSidebarInputValue');
const sidebarPhone= document.getElementById('form-sidebar-phone');
const sidebarWeb= document.getElementById('sidebar-form-web');

const emailErr= document.getElementById('sidebar-email-err');


sidebarEmail.addEventListener('focus', ()=> emailErr.style.display = 'none')

const btn = document.getElementById('sidebar-form-btn');
const success = document.getElementById('msgSubmitTwo');



$("#sidebarForm").validator().on('submit', function(event) {
  event.preventDefault();

  
  const serviceID = 'service_jzdvvif';
  const templateID = 'template_59smb5f';
  
  validate();
  
  if(event.isDefaultPrevented()) {
    console.log(
      sidebarEmail.value,
      sidebarArea.value,
      sidebarPhone.value,
      sidebarWeb.value,
    );

    if(validate()){
      btn.innerHTML = 'Enviando...';
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              btn.innerHTML = 'Contactanos';
              formSuccess();
              success.style.display='block'
            }, (err) => {
              btn.innerHTML = 'Contactanos';
              formError();
              success.style.display='block'
              success.innerHTML = 'Hubo un error al enviar';
              });
          }
          // else{
          //   submitMSG(false, 'Complete el formulario');
          // }
          setTimeout(()=>success.style.display='none',5000)
    }
    
  }); 

    

    function validate(){

      if( !isValidEmail(sidebarEmail.value) ){
        emailErr.style.display='block'
        return false
      }
      else emailErr.style.display='none'
      // if( robotArea.value.length < 3 || robotArea.value.length > 4 ||  !robotArea.value.includes('+') ){
      //   areaErr.style.display='block'
      //   return false
      // }
      // else areaErr.style.display='none' 
      return true
    }


    function formSuccess(){
      const form = document.getElementById('sidebarForm');
      if(form){
        form.reset();
      }
      if(form){
        form.reset();
      }
      submitMSG(true, "Mensaje enviado");
  }
  function formError(){
      $("#sidebarForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
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