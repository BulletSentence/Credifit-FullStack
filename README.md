# Fullstack Developer Node/React

### Stack:
- NodeJS
- ReactJS
- NestJS
- Typescript


## 1 - Iniciando Projeto
### Inicializando o Postgres no docker
<details>
  <summary> Iniciando Projeto</summary>
  <ol>
     <code>
     bash
cd backend
docker-compose up -d
</code>
  </ol>
</details>

### Migrando o banco de dados
```bash
cd backend
npx prisma migrate dev --name init
```

### Populando o banco de dados
```bash
cd backend
npx prisma db seed --preview-feature
```

### Iniciando o backend
```bash
cd backend
npm run start:dev
```
