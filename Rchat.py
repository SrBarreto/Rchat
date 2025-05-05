# tela inicial:
   #titulo: Rchat
   #Botao: iniciar chat
       # quando clicar no botao:
       # abrir um modal/popup/alerta

          # Titulo: Bem vindo ao Rchat
          # Caixa de Textos: Escreva seu nome no chat

          # Botao: Entrar no chat
            # quando clicar no botao
            #fechar o popup
            # sumir com o titulo
            #sumir com o botao iniciar chat

              # carrregar o chat
              # carregar o campo de enviar mensagem: " Digite sua mensagem"
              # botao Enviar
                 # quando clicar no botao enviar
                 # enviar a mensagemtion import pget
                 # limpar a caixa de mensagem  


# importar o flat 
import flet as ft # type: ignore
 # criar uma funcao principal para rodar o seu aplicativo


def main(pagina):
# titulo: Rchat
    pagina.bgcolor = ft.colors.BLUE_100
    
    titulo = ft.Text( 
     "RCHAT",
        size=40,
        weight="bold",
        color="white",
        text_align=ft.TextAlign.CENTER)
    
    # vamos usar o websocket- tunel de comuniçao entre 2 usuario em servido diferentes
    
    def enviar_mensagem_tunel(mensagem): 
        #executar tudo o que eu quero que aconteca para todo mundo ver
        #todos os usuarios que receberem a mensagem
        texto = ft.Text(mensagem)
        chat.controls.append(texto) # type: ignore
        pagina.update()

    pagina.pubsub.subscribe(enviar_mensagem_tunel)

    def enviar_mensagem(evento):
       nome_usuario = caixa_nome.value # type: ignore
       texto_campo_mensagem = campo_enviar_mensagem.value
       mensagem = f'{nome_usuario}: {texto_campo_mensagem}'
       pagina.pubsub.send_all(mensagem)
       # limpar a caixa de enviar mensagem
       campo_enviar_mensagem.value=''
       pagina.update()
       
    campo_enviar_mensagem = ft.TextField(label="digite qui sua mensagem", on_submit=enviar_mensagem)
    botao_enviar=ft.ElevatedButton('Enviar', on_click=enviar_mensagem)
    linha_enviar = ft.Row([campo_enviar_mensagem, botao_enviar])
    return linha_enviar

    chat = ft.Column()

    def entrar_chat(evento):
    #fechar o popup
       popup.open=False
     # sumir com o titulo
       pagina.remove(titulo)
        #sumir com o botao iniciar chat
       pagina.remove(botao)
         # carrregar o chat
       pagina.add(chat)
           # carregar o campo de enviar mensagem: " Digite sua mensagem"
           # botao Enviar
       pagina.add(linha_enviar)
       pagina.add(linha_enviar)
       
       # adicionar no chat a mensagem' Fulano entrou no chat
       nome_usuario =caixa_nome.value
       mensagem = f'{nome_usuario} entrou no chat'
       pagina.pubsub.send_all(mensagem)
       pagina.update()

    #criar o popup
    titulo_popup=ft.Text('Bem vindo ao Rchat')
    caixa_nome=ft.TextField(label='Digite o seu nome') 
    botao_popup= ft.ElevatedButton("Entar no Chat", on_click=entrar_chat)

    popup=ft.AlertDialog(title=titulo_popup, content=caixa_nome,actions= [botao_popup])
    
 
# Botao: iniciar chat
    def abrir_popup(evento):
        pagina.dialog = popup
        popup.open = True
        pagina.update()
  

    botao = ft.ElevatedButton(" Iniciar chat ", on_click=abrir_popup)
    
    #colocar os elementos na pagina
    pagina.add(titulo)
    pagina.add(botao)
    
    # colocar o que essa funcao vai fazer
# executar essa funcao com o flet
ft.app(main, view=ft.WEB_BROWSER)
