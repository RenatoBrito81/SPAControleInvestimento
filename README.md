<h1 align="center">Aceleração Global Dev #2 da Avanade em parceria com a Digital Innovation One</h1>

### Descrição

- Desafio em Angular proposto pela Camila Ribeiro, onde deverá será implementado uma SPA, com os requisitos abaixo:
   1. Criar uma aplicação Angular e disponibiliza-la no GitHub.

   2. Criar no minimo 3 componentes que deverão estar interagindo na mesma página.
      - Foram criados 9 componentes para o app para cada ação, onde: 
        - Para o Tipo de Investimento foram criados os componentes para listar, alterar e cadastrar
        - Para o Investimento foram criados os componentes para lsitar, alterar e cadastrar.
        - Criado componente para apresentar o cabeçalho do app.
        - Criado componente para apresentar uma mensagem ao usuário.
        - Criado o componente principal com o resuldo dos investimentos, apresentado o total investido.

   3. Escolher no mínimo 4 componentes do Angular Material e incorporar na aplicação.
      - Fora utilizados 12 componentes do Angular Material, conforme citado abaixo:
         - MatToolbarModule = Componente para criar o toolbar no Header.
         - MatIconModule = Componente para criar os ícos dos menus.
         - MatButtonModule = Componente para criar os botões.
         - MatMenuModule = Componente para criar os menus.
         - MatTableModule = Componente para criar as tabelas.
         - MatCheckboxModule = Componente para criar o checkbox.
         - MatInputModule = Componente para criar os campos de input.
         - MatFormFieldModule = Componente para criar um formulário dos campos de cadastro.
         - MatSelectModule = Componente para criar o campo para seleção.
         - MatDialogModule = Componente para criar a mensagem para o usuário.
         - MatDatepickerModule = Componente para criar o campo de data.
         - MatSortModule = Componente para criar a tabela ordenada.

   4. Criar em uma das páginas uma interação através da interpolação e/ou utilizando Property Biding.
      - Foi aplicado a interpolação, Property Biding e o Two Data Biding em todo o app.

   5. Criar uma explicação sobre o que foi feito, está explicação será inserida na plataforma junto com o link para o código do GitHub.
      - Exeplicação será inserido em tópico posterior.

   6. Criar um vídeo demonstrativo da aplicação construída, e publicá-lo no YouTube, passando o link de acesso na plataforma. Este passo não é obrigatório, mas entrará como um diferencial.

### Execução

- Para executar o app, deve-se executar primeira o **npm i** para a instalação dos pacotes de dependência.

- Executar o comando **ng serve -o** para executar app.

### Back-End

- O Back-End do app está mockado em memória, onde ao recarregar o app os dados serão perdidos e serão carregados os dados iniciais.

### Explicação

- O app tem como objetivo armazenar e controlar os investimentos aplicados do usuário, onde é possível fazer o cadastro dos tipos de investimentos que o usuário pretende fazer.

- Foram criados trÊs menus principais na Home do app com objetivo de facilitar a usuabilidade.

- O primeiro menu chamado Home tem como função voltar a página principal do app onde é apresentado o resumo total dos investimento e é possível ordenar as colunas clicando sobre elas, podendo ordenar na ordem crescente e descrente. Ao final da tabela é apresentado o valor total investido.

- O segundo menu chamado Tipo de Investimento tem como função efetuar o CRUD das informações pertinentes ao tipo de investimento, onde a unica funcionalidade não implementada foi o delete, mas foi criado uma opção para desabilitar o tipo de investimento e com isso o mesmo não aparece para o usuário ao alterar ou cadastrar um novo investimento.

- O terceiro menu chamdo Investimento tem como função efetuar o CRUD das informações do investimento, onde é possível fazer todo o controle dos dados.

### Melhorias

- Não foi possível encontrar um componente para gráfico gratuito que fosse satisfário para a utilzação no app, onde há alguns muitos bons no mercado, mas com o preço alto. Foi encontrado um componente no GitHub, mas que apresentou instabilidade e por isso foi retirado desta versão do app.

- O app tem várias funções que podem ser incluídas e melhoras, mas o escopo do desafio a versão atual atende aos requisitos e serviu para um sólido estudo em Angular e no Angular Material.

### Autor

Renato Brito
