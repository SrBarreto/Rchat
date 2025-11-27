// ============================================
// RCHAT - Lógica da Aplicação Futurista
// ============================================
// Design: Moderno com gradientes púrpura, rosa, azul ciano e fundo escuro
// O CSS utiliza variáveis CSS para cores de fácil customização
// Animações: slideInUp para mensagens, gradientShift para header
// Responsividade: Mobile-first com breakpoint 768px

// Variável global para armazenar o nome do usuário
let nomeUsuario = localStorage.getItem('nomeUsuario') || null;

// Variável para armazenar as mensagens em memória
let mensagens = [];

// Carrega mensagens salvas do localStorage ao iniciar a aplicação
document.addEventListener('DOMContentLoaded', () => {
  // Tenta recuperar mensagens previamente salvas no localStorage
  const mensagensGuardadas = localStorage.getItem('mensagens');
  if (mensagensGuardadas) {
    // Converte string JSON para array de objetos
    mensagens = JSON.parse(mensagensGuardadas);
  }

  // Se houver um nome de usuário salvo, habilita interface
  if (nomeUsuario) {
    // Exibe o nome no campo desabilitado
    document.getElementById('nomeInput').value = nomeUsuario;
    document.getElementById('nomeInput').disabled = true;
    document.getElementById('salvarNomeBtn').disabled = true;
    // Habilita campos de mensagem
    document.getElementById('mensagemInput').disabled = false;
    document.getElementById('enviarBtn').disabled = false;
    // Exibe as mensagens salvas
    exibirMensagens();
  }

  // Event listeners - associa funções aos eventos dos botões
  document.getElementById('salvarNomeBtn').addEventListener('click', salvarNome);
  document.getElementById('enviarBtn').addEventListener('click', enviarMensagem);
  document.getElementById('mensagemInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensagem();
  });
  document.getElementById('limparBtn').addEventListener('click', limparChat);
});

// Função para salvar o nome do usuário
function salvarNome() {
  // Obtém o valor do input
  const nome = document.getElementById('nomeInput').value.trim();

  // Valida se o nome não está vazio
  if (!nome) {
    alert('Por favor, digite um nome!');
    return;
  }

  // Salva na variável global
  nomeUsuario = nome;

  // Salva no localStorage para persistência
  localStorage.setItem('nomeUsuario', nome);

  // Desabilita o campo e botão de nome
  document.getElementById('nomeInput').disabled = true;
  document.getElementById('salvarNomeBtn').disabled = true;

  // Habilita os campos de mensagem
  document.getElementById('mensagemInput').disabled = false;
  document.getElementById('enviarBtn').disabled = false;

  // Foca no campo de mensagem
  document.getElementById('mensagemInput').focus();

  // Adiciona mensagem de sistema
  adicionarMensagem(`${nome} entrou no chat`, true);
}

// Função para enviar uma mensagem
function enviarMensagem() {
  // Obtém o valor do campo de mensagem
  const texto = document.getElementById('mensagemInput').value.trim();

  // Valida se a mensagem não está vazia
  if (!texto) {
    return;
  }

  // Cria o texto completo da mensagem
  const mensagemCompleta = `${nomeUsuario}: ${texto}`;

  // Adiciona a mensagem ao array
  adicionarMensagem(mensagemCompleta, false);

  // Limpa o campo de input
  document.getElementById('mensagemInput').value = '';

  // Foca novamente no input
  document.getElementById('mensagemInput').focus();
}

// Função para adicionar uma mensagem
function adicionarMensagem(texto, isSystem = false) {
  // Cria um objeto com a mensagem e timestamp
  const mensagem = {
    texto: texto,
    tipo: isSystem ? 'sistema' : 'normal',
    timestamp: new Date().toLocaleTimeString('pt-BR')
  };

  // Adiciona ao array de mensagens
  mensagens.push(mensagem);

  // Salva no localStorage
  localStorage.setItem('mensagens', JSON.stringify(mensagens));

  // Exibe as mensagens na tela
  exibirMensagens();
}

// Função para exibir todas as mensagens
function exibirMensagens() {
  // Obtém o container de mensagens
  const container = document.getElementById('mensagensContainer');

  // Limpa o container
  container.innerHTML = '';

  // Se não há mensagens, exibe mensagem padrão
  if (mensagens.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">Nenhuma mensagem ainda. Digite seu nome e comece a conversar!</p>';
    return;
  }

  // Itera sobre cada mensagem
  mensagens.forEach((msg) => {
    // Cria um elemento div para a mensagem
    const divMensagem = document.createElement('div');
    
    // Adiciona a classe 'mensagem' e 'sistema' se for de sistema
    divMensagem.className = 'mensagem' + (msg.tipo === 'sistema' ? ' sistema' : '');
    
    // Adiciona o texto com o timestamp
    divMensagem.innerHTML = `<small class="text-muted">[${msg.timestamp}]</small><br>${msg.texto}`;
    
    // Adiciona a div ao container
    container.appendChild(divMensagem);
  });

  // Rola para o final do container (última mensagem)
  container.scrollTop = container.scrollHeight;
}

// Função para limpar o chat
function limparChat() {
  // Pede confirmação ao usuário
  if (confirm('Tem certeza que deseja limpar todas as mensagens?')) {
    // Limpa o array de mensagens
    mensagens = [];
    
    // Remove do localStorage
    localStorage.removeItem('mensagens');
    
    // Atualiza a tela
    exibirMensagens();
    
    // Mostra mensagem de confirmação
    alert('Chat limpo com sucesso!');
  }
}