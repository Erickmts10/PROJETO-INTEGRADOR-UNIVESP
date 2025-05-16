function scrollGaleria(direction) {
      const container = document.getElementById('galeria-scroll');
      const scrollAmount = 400;
      container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
      });
    }

    window.addEventListener('load', () => {
      const container = document.getElementById('galeria-scroll');
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      container.scrollLeft = (totalWidth - visibleWidth) / 2;
    });
  


  function scrollGaleria(direction) {
    const container = document.getElementById('galeria-scroll');
    const scrollAmount = 400; // pixels
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  }



  // Captura o formulário de envio
  const formulario = document.getElementById("formOpiniao");
  const opiniaoLista = document.getElementById("opiniaoLista");

  // Função para enviar e exibir a opinião
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Captura o nome e a opinião
    const nome = document.getElementById("nome").value.trim();
    const opiniao = document.getElementById("opiniao").value.trim();

    if (nome && opiniao) {
      // Cria um item de lista para a opinião
      const listaItem = document.createElement("li");
      listaItem.style.marginBottom = "15px";
      listaItem.style.padding = "10px";
      listaItem.style.border = "1px solid #ddd";
      listaItem.style.borderRadius = "5px";
      listaItem.style.backgroundColor = "#f9f9f9";

      listaItem.innerHTML = `<strong>${nome}</strong>: <p style="margin: 5px 0;">${opiniao}</p>`;

      // Adiciona a opinião à lista
      opiniaoLista.appendChild(listaItem);

      // Limpa o formulário após o envio
      document.getElementById("nome").value = "";
      document.getElementById("opiniao").value = "";
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });