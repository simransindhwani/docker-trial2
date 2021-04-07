FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN /usr/bin/npm cache clean --force
RUN /usr/bin/npm install && /usr/bin/npm run build
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"]
