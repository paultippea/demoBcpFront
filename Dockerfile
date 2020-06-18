#stage
FROM node:latest as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
#RUN npm run build

#stage 2
#FROM nginx:alpine  
#COPY --from=build-step /app/dist/* /usr/share/ngnix/html
EXPOSE 4200

CMD npm run start