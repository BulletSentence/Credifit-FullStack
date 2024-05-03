# * Fullstack Developer Node/React
> This is a challenge by Coodesh


Surgiu uma nova demanda urgente e precisamos de uma área exclusiva para fazer o
upload de um arquivo das transações feitas na venda de produtos por nossos
clientes.
Nossa plataforma trabalha no modelo criador-afiliado, sendo assim um criador
pode vender seus produtos e ter 1 ou mais afiliados também vendendo esses
produtos, desde que seja paga uma comissão por venda.
Sua tarefa é construir uma interface web que possibilite o upload de um arquivo
de transações de produtos vendidos, normalizar os dados e armazená-los em um
banco de dados relacional.
Você deve utilizar o arquivo sales.txt para fazer o teste da
aplicação. O formato esá descrito na seção "Formato do arquivo de entrada".


* Video: [Video de Apresentação do Challenge](https://www.loom.com/share/24cdfeced2fd480cb4e1602ed098c8d0)

### Stack:
- NodeJS
- ReactJS
- NestJS
- Typescript

### Banco de Dados
- PostgreSQL

### Documentação de Testes Detalhada (Wiki)
https://github.com/BulletSentence/Credifit-FullStack/wiki


### Requisitos Funcionais

Ter uma tela (via formulário) para fazer o upload do arquivo
Fazer o parsing do arquivo recebido, normalizar os dados e armazená-los em um
banco de dados relacional, seguindo as definições de interpretação do arquivo
Exibir a lista das transações de produtos importadas por produtor/afiliado,
com um totalizador do valor das transações realizadas
Fazer tratamento de erros no backend, e reportar mensagens de erro amigáveis
no frontend.

### Requisitos Não Funcionais

A aplicação deve ser simples de configurar e rodar, compatível com ambiente
Unix. Você deve utilizar apenas bibliotecas gratuitas ou livres.
Utilize docker para os diferentes serviços que compõe a aplicação para
que funcione facilmente fora do seu ambiente pessoal.
Use qualquer banco de dados relacional.
Use commits pequenos no Git e escreva uma boa descrição para cada um.
Escreva unit tests tanto no backend quanto do frontend.
Faça o código mais legível e limpo possível.
Escreva o código (nomes e comentários) em inglês. A documentação pode ser em
português se preferir.

### Formato do arquivo de entrada

| Campo    | Início | Fim | Tamanho | Descrição                      |
| -------- | ------ | --- | ------- | ------------------------------ |
| Tipo     | 1      | 1   | 1       | Tipo da transação              |
| Data     | 2      | 26  | 25      | Data - ISO Date + GMT          |
| Produto  | 27     | 56  | 30      | Descrição do produto           |
| Valor    | 57     | 66  | 10      | Valor da transação em centavos |
| Vendedor | 67     | 86  | 20      | Nome do vendedor               |

### Tipos de transação

Esses são os valores possíveis para o campo Tipo:

| Tipo | Descrição         | Natureza | Sinal |
| ---- | ----------------- | -------- | ----- |
| 1    | Venda produtor    | Entrada  | +     |
| 2    | Venda afiliado    | Entrada  | +     |
| 3    | Comissão paga     | Saída    | -     |
| 4    | Comissão recebida | Entrada  | +     |


## * Iniciando Projeto

<details>
  <summary> 0 - Iniciando o Node </summary>
  <ol>
  <br>
 
     cd backend
     npm install
    
     cd frontend
     npm install
    
  </ol>
</details>

<details>
  <summary> 1 - Iniciando o Banco de Dados pelo Docker </summary>
  <ol>
  <br>
 
     cd backend
     docker-compose up -d

  </ol>
</details>

<details>
  <summary> 2 - Criando as Migrações </summary>
  <ol>
  <br>
 
     cd backend
     npx prisma migrate dev --name init

  </ol>
</details>

<details>
  <summary> 3 - Criando as Seeds </summary>
  <ol>
  <br>
 
    cd backend
    npm run prisma:seed

  </ol>
</details>

<details>
  <summary> 4 - Iniciando Backend </summary>
  <ol>
  <br>
 
    cd backend
    npm run start:dev

  </ol>
</details>

<details>
  <summary> 5 - Iniciando Frontend </summary>
  <ol>
  <br>
 
    cd frontend
    npm run start:dev

  </ol>
</details>

<details>
  <summary> 6 - Testes </summary>
  <ol>
  <br>
 
    cd frontend
    npm run test
    
    cd backend
    npm run test

  </ol>
</details>

## * Dependências e Bibliotecas

<details>
  <summary>  Prisma </summary>
  <ol>
  <br>
> Object-Relational Mapping (ORM)
  </ol>
</details>

<details>
  <summary> Class-validator </summary>
  <ol>
  <br>
> Responsável por validar os dados do modelo ORM
  </ol>
</details>

<details>
  <summary> react-router-dom  </summary>
  <ol>
  <br>
> Responsável pelo roteamento e escalabilidade
  </ol>
</details>

<details>
  <summary> date-fns </summary>
  <ol>
  <br>
> Usado na formatação de datas
  </ol>
</details>

<details>
  <summary> Bulma </summary>
  <ol>
  <br>
> Estilização da Frontend
  </ol>
</details>

<details>
  <summary> react-data-table </summary>
  <ol>
  <br>
> Base para a construção da tabela de dados na Frontend
  </ol>
</details>

## Preview

<details>
  <summary> Screenshots </summary>
  <ol>
  <br>
    <img src="https://user-images.githubusercontent.com/37451620/235374649-47884123-2a32-48a3-8bd8-a0107fa12ad3.PNG" width="100%" />
    <img src="https://user-images.githubusercontent.com/37451620/235374653-8355e921-5961-4665-89b3-0aedbeaa3d9e.PNG" width="100%" />
  </ol>
</details>



