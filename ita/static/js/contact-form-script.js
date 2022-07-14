/*==============================================================*/
// Contact Form  JS
/*==============================================================*/




const btn = document.getElementById('contact-page_button');

const formPage=document.getElementById('contactFormTwo');

formPage.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_l3zw1dm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});








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
//         submitMSG(true, "Message Submitted!")
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