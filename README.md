# 💬 RCHAT - Chat Simples

Um aplicativo de chat simples e funcional desenvolvido com **HTML**, **CSS**, **JavaScript** e **Bootstrap 5**.

## 📋 Características

✅ Interface limpa e responsiva  
✅ Armazenamento de mensagens em `localStorage`  
✅ Suporte para múltiplos usuários (um de cada vez)  
✅ Mensagens com timestamp  
✅ Mensagens de sistema  
✅ Botão para limpar chat  
✅ Totalmente estático - sem backend necessário  
✅ 100% comentado para aprendizado  

## 🏗️ Estrutura do Projeto

```
Rchat/
├── index.html       # Página principal (HTML com Bootstrap)
├── styles.css       # Estilos customizados (totalmente comentado)
├── app.js           # Lógica da aplicação (totalmente comentado)
├── data.json        # Exemplo de dados (referência)
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir a Aplicação

Abra o arquivo `index.html` diretamente no navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou acesse localmente em um servidor HTTP:

```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Usar o Chat

1. **Digite seu nome** no campo "Digite seu nome..."
2. **Clique em "Salvar Nome"**
3. **Digite uma mensagem** no campo abaixo
4. **Pressione Enter** ou clique em "📤 Enviar"
5. As mensagens aparecem com timestamp
6. Use **"🗑️ Limpar Chat"** para remover todas as mensagens

## 📝 Arquivos Explicados

### `index.html`
- Estrutura HTML com Bootstrap 5
- Uso de classes Bootstrap para layout responsivo
- Comentários em cada seção principal

### `styles.css`
- Estilos customizados além do Bootstrap
- Scroll bonito para área de mensagens
- Animações suaves
- Responsivo para mobile
- Cada seção comentada

### `app.js`
- Toda a lógica da aplicação
- Funções comentadas linha por linha
- Uso de `localStorage` para persistência
- Event listeners bem organizados
- Validações de input

### `data.json`
- Estrutura de exemplo de dados
- Referência para entender o formato de mensagens
- Configurações da aplicação

## 💾 Armazenamento

As mensagens são armazenadas no **`localStorage`** do navegador:

```javascript
// Mensagens são salvas como JSON
localStorage.setItem('mensagens', JSON.stringify(mensagens));

// Nome do usuário é salvo
localStorage.setItem('nomeUsuario', nome);
```

**Limpar dados:**
```javascript
localStorage.clear(); // Limpa tudo
localStorage.removeItem('mensagens'); // Limpa apenas mensagens
```

## 🎨 Customização

### Mudar cores do Bootstrap

Edite `index.html` e altere as classes:

```html
<!-- Primário (azul) -->
<header class="bg-primary">

<!-- Sucesso (verde) -->
<button class="btn btn-success">

<!-- Perigo (vermelho) -->
<button class="btn btn-danger">
```

### Adicionar novos estilos

Edite `styles.css` e adicione suas classes:

```css
.mensagem-especial {
  background-color: #fff3cd;
  border: 2px solid #ffc107;
}
```

## 🐛 Troubleshooting

**Q: As mensagens desaparecem ao fechar o navegador?**  
R: Limpe o localStorage do site nas configurações do navegador.

**Q: O chat não funciona no navegador?**  
R: Verifique se o JavaScript está ativado (F12 > Console).

**Q: Erro "Cannot read property 'value' of null"?**  
R: Certifique-se de que os IDs do HTML correspondem aos do JavaScript.

## 📱 Responsividade

A aplicação é responsiva e funciona em:
- 💻 Desktop (1920x1080+)
- 💻 Tablet (768x1024)
- 📱 Mobile (320x568+)

## 🔧 Desenvolvimento

Para adicionar novas funcionalidades:

1. **Editar HTML** - Adicione novos elementos
2. **Editar CSS** - Adicione estilos
3. **Editar JS** - Adicione lógica
4. **Testar** - F12 para ver console

## 📚 Referências

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MDN - localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

## 📄 Licença

Livre para usar e modificar.

## 👨‍💻 Autor

Criado como exemplo educacional em 2025.

---

**Divirta-se codificando!** 🎉
