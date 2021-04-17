FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY app/ .
RUN npm install
CMD ["node", "app.js"]