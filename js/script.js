function generateQRCode() {
  const data = document.getElementById("data").value;
  const qrCodeContainer = document.getElementById("qrcode");
  
  qrCodeContainer.innerHTML = ""; // Limpa QR Code anterior
  new QRCode(qrCodeContainer, data);
}

    // Seleciona os elementos
const botao = document.getElementById('botao');
const textocument.getElementById('paragrafo');

    // Adiciona o evento de clique ao botão
botao.addEventListener('click', () => {
    // Muda o estilo do parágrafo para que ele apareça
textCode.style.display = 'block'; });
