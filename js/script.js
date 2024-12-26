function generateQRCode() {
    const data = document.getElementById("data").value.trim();
    const qrCodeContainer = document.getElementById("qrcode");
    const downloadLink = document.getElementById("download");

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

    // Aguarda o QR Code ser renderizado antes de gerar o link de download
    setTimeout(() => {
      // Localiza o elemento <canvas> dentro do contêiner
      const canvas = qrCodeContainer.querySelector("canvas");
      if (canvas) {
        // Ajustando a imagem gerada para o tamanho e resolução desejada
        const dataURL = canvas.toDataURL("image/png"); // Converte para URL da imagem
        downloadLink.href = dataURL; // Define o href para o Data URL
        downloadLink.style.display = "inline-block"; // Mostra o botão de download
      }
    }, 100); // Pequeno atraso para garantir que o QR Code foi renderizado

    // Exibe o texto indicando sucesso
    document.getElementById("textCode").style.display = "block";
  }

  // Adiciona o evento de clique ao botão
  document.getElementById("botao").addEventListener("click", generateQRCode);