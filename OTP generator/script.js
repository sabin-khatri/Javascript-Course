function generateOTP(){
    var digits = "0123456789";
    let OTP = '';
    for(i=0;i<6; i++){
        OTP += digits[Math.floor(Math.random() * 10)];

    }
    var span = document.querySelector(".box span");
    span.innerHTML = OTP;
}