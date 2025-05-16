# 🌳 Um Parque Para Todos – Vila do Rodeio

Este projeto é uma página web informativa sobre o **Parque Municipal Vila do Rodeio**, localizado na Cidade Tiradentes, São Paulo/SP. A página apresenta detalhes sobre o parque, atrações, galeria de fotos, localização, informações de transporte e um formulário para visitantes deixarem opiniões.

## 📁 Estrutura do Projeto

O projeto está dividido em três arquivos principais:

- `index.html`  
  Estrutura principal da página. Contém toda a marcação HTML, seções organizadas e componentes visuais como:
  - Título e cabeçalho
  - Menu de navegação
  - Carrossel de imagens
  - Seções informativas sobre o parque
  - Galeria de fotos com rolagem horizontal
  - Mapa de localização integrado via Google Maps
  - Informações sobre transporte público
  - Formulário de envio de opiniões

- `style.css`  
  Folha de estilos contendo todo o CSS do projeto. Centraliza os estilos anteriormente espalhados pelo HTML, incluindo:
  - Layouts, fontes, cores e espaçamentos
  - Estilização de botões, carrossel, galeria e formulário
  - Classes extras extraídas de estilos inline convertidos automaticamente

- `script.js`  
  Script JavaScript com a lógica de:
  - Rolagem horizontal da galeria
  - Reposicionamento inicial da galeria no carregamento
  - Manipulação do formulário de envio de opiniões dos visitantes (sem backend)

## 📦 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Bootstrap 5.3.5**  
  (via CDN, usado para componentes responsivos e ícones com `bootstrap-icons`)

## 📸 Recursos Visuais

As imagens utilizadas no projeto estão organizadas em pastas locais e incluem:
- Fotos principais do parque (`parque/p1.webp`, `parque/p2.webp`, etc.)
- Galeria interativa com 12 imagens
- Mapa embutido via **Google Maps Embed**

## 📝 Funcionalidades

- ✅ Design responsivo
- ✅ Menu de navegação interativo
- ✅ Carrossel com transição suave
- ✅ Galeria de fotos com setas de navegação
- ✅ Formulário funcional (simulado) para envio de opiniões
- ✅ Mapa com localização exata do parque
- ✅ Dicas de como chegar via transporte público

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
