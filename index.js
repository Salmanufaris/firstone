function sendMail(){

    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    };


const serviceID="service_a2a8jkt";
const templateID="template_3pye31u";

emailjs
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("subject").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("mesage sented");
    }
).catch(err => console.log(err));
}