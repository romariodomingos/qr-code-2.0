function generateQRCode() {
  const data = document.getElementById("data").value;
  const qrCodeContainer = document.getElementById("qrcode");
  
  qrCodeContainer.innerHTML = ""; // Limpa QR Code anterior
  new QRCode(qrCodeContainer, data);
}


function text( generateQRCode ){
  var textC = document.getElementById("textCode").value;

  textC.innerHTML = "Your QR Code Was Generated Successfully!";
}