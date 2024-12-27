function generateQRCode() {
    const data = document.getElementById("data").value.trim();
    const qrCodeContainer = document.getElementById("qrcode");
    const imgCode = document.getElementById("imgcode");

    if (data === "") {
      alert("Por favor, insira algum texto para gerar o QR Code.");
      return;
    }

    qrCodeContainer.innerHTML = ""; // Limpa QR Code anterior

    // Cria o QR Code com cores padrão
    const qrCode = new QRCode(qrCodeContainer, {
      text: data,
      // colorDark: "#2E83F2",  // Cor escura do QR Code
      // colorLight: "#F2F2F2", // Cor de fundo do QR Code
      correctLevel: QRCode.CorrectLevel.H
    });


    // Exibe o texto indicando sucesso
    document.getElementById("textCode").style.display = "block";

     // O cultar a img indicando sucesso
     document.getElementById("imgCode").style.display = "none";
    
}

  // Adiciona o evento de clique ao botão
  document.getElementById("botao").addEventListener("click", generateQRCode);