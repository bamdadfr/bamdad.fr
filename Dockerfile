FROM node:alpine as build

WORKDIR /app

COPY package.json ./
RUN npm i --legacy-peer-deps

COPY . ./
RUN npm run build

# serve
FROM nginx:alpine
LABEL maintainer="Bamdad Sabbagh <devops@bamdadsabbagh.com>"

COPY --from=build /app/build /app
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
