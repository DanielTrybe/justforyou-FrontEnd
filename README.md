# Projeto justforyou-FrontEnd

### Desenvolvido com api pública do Github, ReactJS, Material UI, JavaScript e TypeScript.

### Requisitos

1. VS code instalado, caso não tenha <a href="https://code.visualstudio.com/download" target="_blank">clique aqui para instalar</a>
2. Abre o VS code, clique no menu terminal e depois em novo terminal, execude o comando: <code>npm install</code>
3. Não interrompa a instalação, ou terá que executar o comando acima novamente.
4. Após tudo instalado, execute no terminal: <code>npm start</code>
5. Aguarde um pouco, dependendo da sua máquina pode levar bastante tempo.
6. Quando terminar, será aberto em seu navegador o website.
7. Pronto! A aplicação está pronta para uso!

## Conteúdo

# Página inicial

Consiste em listar os respositórios de um usuario que foi pesquisado no campo de busca, nesta página será exibido em cards cada repositorio que a pessoa tem como público.

# Detalhes do repositório

Nesta página é exibido todas as branches que o repositório escolhido contém e ao clicar em "See commits" vai abrir um Pop Up com o nome, data e o commit que foi feito.

### Estrutura

O código contém a seguinte estrutura:

```
  src__|
  _____|-__mocks__
  _____|-__tests__
  _____|-components__|
  ___________________|-items
  ___________________|-layouts
  ___________________|-modal
  _____|-hooks
  _____|-images
  _____|-pages_______|
  ___________________|-CardDetails
  ___________________|-Cards
  _____|-routes
  _____|-services____|
  ___________________|-api
  ___________________|-context
  _____|-templates
```
