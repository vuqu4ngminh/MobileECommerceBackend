FROM node:18-alpine

WORKDIR /app/backend/

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/node @babel/core @babel/cli

EXPOSE 8080

COPY . .

RUN npm run build-src

CMD ["npm", "run", "build"]