// Seleciona a tag <p> com a classe "about-text"
const aboutTextElement = document.querySelector('.about-text');

// Define o texto com quebras de linha (\n representa a quebra de linha)
const text = "DESENVOLVEDOR FULL STACK \n& WEB DESIGNER.";

// Variáveis para controlar o índice do caractere e a velocidade da digitação
let index = 0;
const typingSpeed = 100; // Velocidade de digitação em milissegundos

// Função para "escrever" o texto letra por letra
function typeWriter() {
  if (index < text.length) {
    // Verifica se o caractere atual é uma quebra de linha (\n)
    if (text.charAt(index) === "\n") {
      aboutTextElement.innerHTML += "<br>"; // Adiciona a tag <br> para quebra de linha no HTML
    } else {
      aboutTextElement.innerHTML += text.charAt(index); // Adiciona o próximo caractere
    }
    index++;
    setTimeout(typeWriter, typingSpeed); // Aguarda um tempo antes de escrever a próxima letra
  }
}

// Inicia a função de escrita
typeWriter();



// Seleciona o botão e o corpo da página
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Ícones SVG para claro e escuro
const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.354V2h1v2.354h-1zm0 13.292V22h1v-4.354h-1zm9.01-9.01l-1.42 1.42-1.773-1.772 1.42-1.42 1.773 1.772zm-11.82 9.01l-1.773 1.773-1.42-1.42 1.773-1.772 1.42 1.42zM12 6.91a5.09 5.09 0 1 0 0 10.182A5.09 5.09 0 0 0 12 6.91zm7.354 5.09h2.354v1h-2.354v-1zm-13.292 0v1H2v-1h2.354zM4.01 4.01l1.42 1.42L3.657 7.202 2.237 5.78 4.01 4.01zm14.99 11.42l1.773 1.773-1.42 1.42-1.773-1.772 1.42-1.42z"/></svg>
`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.828 15.046c-3.9.756-7.692-2.037-7.692-5.986 0-2.686 1.553-5.119 4.002-6.208.134-.062.116-.259-.024-.289a8.77 8.77 0 0 0-1.739-.174C11.754 2.39 7.762 6.382 7.762 11.21c0 4.828 3.992 8.82 8.82 8.82 2.978 0 5.635-1.515 7.102-3.937.075-.125-.054-.285-.203-.247a8.743 8.743 0 0 1-1.653.2z"/></svg>
`;

// Função para alternar entre modos claro e escuro
function toggleTheme() {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeIcon.innerHTML = moonIcon; // Troca para o ícone da lua
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.innerHTML = sunIcon; // Troca para o ícone do sol
  }
}

// Adiciona o evento de clique para alternar os temas
themeToggleButton.addEventListener('click', toggleTheme);


document.addEventListener('mousemove', function (e) {
  const circle = document.createElement('div');
  circle.classList.add('circle1');
  document.body.appendChild(circle);

  const x = e.pageX; 
  const y = e.pageY; 

  circle.style.left = `${x - 7.5}px`; 
  circle.style.top = `${y - 7.5}px`;  

  setTimeout(() => {
      circle.remove(); 
  }, 1000);
});

