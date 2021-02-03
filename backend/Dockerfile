FROM node:12 AS ui-build
WORKDIR /usr/src/app
COPY taskZero/ ./taskZero/
RUN cd taskZero && npm install && npm run build

FROM node:12 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/taskZero/dist/taskZero ./taskZero/dist/taskZero
COPY package*.json ./
RUN npm install
COPY index.js .
EXPOSE 3000
CMD ["npm", "start"]