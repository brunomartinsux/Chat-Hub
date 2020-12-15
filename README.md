# React Chat APP

We are gonna use the MERN stack, wich contains the following: MongoDB, Express, React, Node.js.

# Directory: 

.
├── Dockerfile
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock

# Dockerizing

To dockerize your react app, you will need to add a Dockerfile to your app directory, and then, follow the recipe at docker hub documentation.

```bash

# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
# start app
CMD ["npm", "start"]

```