// Função para gerar QR Code
function generateQRCode() {
    const data = document.getElementById("data").value.trim();
    const qrCodeContainer = document.getElementById("qrcode");

    if (data === "") {
      alert("Please Enter Some Text to Generate The QR Code.");
      return;
    }

    qrCodeContainer.innerHTML = ""; // Limpa QR Code anterior

    // Cria o QR Code com cores padrão
    new QRCode(qrCodeContainer, {
      text: data,
      // colorDark: "#F2f2f2",  // Azul escuro
      // colorLight: "#5E9FF2", // Azul claro
      correctLevel: QRCode.CorrectLevel.H
    });

    // Exibe o texto indicando sucesso
document.getElementById("textCode").style.display = "block";
}

  // Adiciona o evento de clique ao botão
document.getElementById("botao").addEventListener("click", generateQRCode);