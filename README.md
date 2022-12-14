# Projeto justforyou-FrontEnd

Quer ver agora o projeto funcionando? <a href="https://danieltrybe.github.io/justforyou-FrontEnd/" target="_blank">Clique aqui!</a>

## Principais tecnologias utilizadas

<code><img height="30" src="https://bognarjunior.files.wordpress.com/2018/09/typescript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="30" src="https://v4.mui.com/static/logo.png"></code>

### Desenvolvido com api pública do Github, ReactJS, Material UI, JavaScript e TypeScript.

# Iniciando

1. VS code instalado, caso não tenha <a href="https://code.visualstudio.com/download">clique aqui para instalar</a> .
2. Tenha o git instalado em sua máquina, caso não tenha <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">clique aqui para instalar</a> .
3. Em seu Github crie um repositório vazio, caso não saiba <a href="https://docs.github.com/pt/get-started/quickstart/create-a-repo">clique aqui para criar</a> .

## Exemplo de como usar

Caso não deseje ter um repositório no seu GitHub, apenas faça o clone.
Criando uma nova pasta do projeto:

Windows:

1. Crie uma nova pasta em algum local que deseja.
2. Abra o terminal do GitBash dentro da pasta criada, depois de entrar nela clique com botão direito, a opção vai aparecer.
3. Copie esta linha: <code>git clone https://github.com/DanielTrybe/justforyou-FrontEnd.git</code> e tecle enter.
4. Entre na pasta com <code>cd justforyou-FrontEnd</code>
5. Execute <code>git remote remove origin</code>
6. Pegue o link do seu respositório criado no inicio!
7. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
8. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
9. Execute <code>code .</code>

Linux:

1. Abra o terminal do linux e navegue até a pasta que deseja.
2. Copie esta linha: <code>git clone https://github.com/DanielTrybe/justforyou-FrontEnd.git</code> e tecle enter.
3. Entre na pasta com <code>cd justforyou-FrontEnd</code>
4. Execute <code>git remote remove origin</code>
5. Pegue o link do seu respositório criado no inicio!
6. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
7. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
8. Execute <code>code .</code>

Com isto inicializamos um novo repositório, associamos o remoto com o link do repositório e atualizamos a pasta.

## Segunda parte

1. Abra o VS code, vá em arquivos e procure a pasta do projeto.
2. Clique no menu terminal e depois em novo terminal, execude o comando: <code>npm install</code>
3. Não interrompa a instalação, ou terá que executar o comando acima novamente.
4. Após tudo instalado, execute no terminal: <code>npm start</code>
5. Aguarde um pouco, dependendo da sua máquina pode levar bastante tempo.
6. Quando terminar, será aberto em seu navegador o website.
7. Pronto! A aplicação está pronta para uso!

# Conteúdo

## Página inicial

Consiste em listar os respositórios de um usuário que foi pesquisado no campo de busca, nesta página será exibido em cards cada repositório que a pessoa tem como público.

![1](https://user-images.githubusercontent.com/78499630/186929839-020f5d7f-583e-48f7-80fc-5399cbc2fd07.gif)

## Detalhes do repositório

Nesta página é exibido todas as branches que o repositório escolhido contém e ao clicar em "See commits" vai abrir um Pop Up com o nome, data e o commit que foi feito.

![2](https://user-images.githubusercontent.com/78499630/186930758-88b22c77-2f24-4282-a978-43807481ff42.gif)

## Commits do repositório

Um popup é aberto para exibir todos os commits feitos nesta branch.

![3](https://user-images.githubusercontent.com/78499630/186931122-7761c2d4-658c-417d-9bc0-bff55910be42.gif)

### Estrutura

O código contém a seguinte estrutura:

```
  src
  |  |-__mocks__
  |  |-__tests__
  |  |-components
  |    |-items
  |    |-layouts
  |    |-modal
  |  |-hooks
  |  |-images
  |  |-pages
  |    |-CardDetails
  |    |-Cards
  |  |-routes
  |  |-services
  |  |-api
  |  |-context
  |  |-templates
```
