const socket = io();

// Nome do usuário padrão
const username = "username";

// Exibir mensagens recebidas no lado esquerdo ou direito com o nome e a hora
socket.on("message", (msgData) => {
  const ul = document.querySelector('#messages');
  const li = document.createElement('li');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Verifica se a mensagem foi enviada pelo próprio usuário ou por outra pessoa
  if (msgData.sender === username) {
    li.classList.add('sent'); // Mensagem enviada (lado direito)
  } else {
    li.classList.add('received'); // Mensagem recebida (lado esquerdo)
  }

  // Coloca o nome do usuário em uma linha separada acima da mensagem
  li.innerHTML = `<strong>${msgData.sender}</strong><br>${msgData.message} <span>${time}</span>`;

  ul.appendChild(li);

  // Rolagem automática para a última mensagem
  const container = document.querySelector('.messages-container');
  container.scrollTop = container.scrollHeight;
});

// Função para enviar mensagens
function enviar() {
  const input = document.querySelector('#msgInput');
  const msg = input.value;

  if (msg.trim() !== "") {
    // Enviar a mensagem para o servidor com o nome do usuário
    socket.send({ sender: username, message: msg });
    input.value = "";
  }
}
