FROM node:18.14

# fire up wdio packages
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "run", "volvo"]