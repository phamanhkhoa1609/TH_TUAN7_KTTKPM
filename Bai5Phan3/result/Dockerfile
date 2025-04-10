FROM node:18-alpine
WORKDIR /app
COPY server.js .
RUN npm install express pg
CMD ["node", "server.js"]
