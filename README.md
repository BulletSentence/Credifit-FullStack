# Fullstack Developer Node/React

### Stack:
- NodeJS
- ReactJS
- NestJS
- Typescript


## Iniciando Projeto
### Inicializando o Postgres no docker
```bash
cd backend
docker-compose up -d
```

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
