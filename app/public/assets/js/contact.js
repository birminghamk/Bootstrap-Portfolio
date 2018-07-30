// $(function() {
//     $('.navbar').hide().delay(50).slideDown();

//     //get user form input
//     const nameInput = $("#name").val().trim();
//     const emailInput = $("#email").val().trim();
//     const messageInput = $("#message").val().trim();

//     //mailgun.js
//     const mailgun = require('mailgun.js');
//     const key = '';
//     const mg = mailgun.client({
//         username: '',
//         key: key
//     });

//     function sendMessage() {
//         mg.messages.create('', {
//             from: `${nameInput} ${emailInput}`,
//             to: ["kate.birmingham212@gmail.com"],
//             subject: "New User Message",
//             text: messageInput
//         })
//         .then(msg=> console.log(msg)) //logs response data
//         .catch(err => console.log(err)); //logs any error
//     }

//     //click submit button
//     $("#submit").on("click", () => {
//         sendMessage();
//     });

// });

