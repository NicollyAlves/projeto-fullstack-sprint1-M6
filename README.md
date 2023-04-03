# projeto-fullstack-sprint1-M6

Antes de começar a inicializar a aplicação, é necessário ir no arquivo .env que está na pasta "back" e alterar as configurações de acordo com os seus dados.

Em seguida, deve gerar uma nova migração executando o seguinte comando CLI: 
    npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts

E depois, para executar todas as migrações pendentes usamos o seguinte comando CLI:
    npm run typeorm migration:run -- -d ./src/data-source

Agora:

Para inicializar a aplicação, é necessário rodar o comando
    cd back

e você entrará na pasta do backend, onde terá que digitar
    yarn dev

em seguida, você precisa abrir outro terminal sem fechar o anterior, e rodar o comando
    cd front

e você entrará na pasta do frontend, onde terá que digitar
    yarn start

e em seguida, digitar
    Y

para rodar a aplicação em outra rota que não seja a 3000.
