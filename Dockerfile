FROM node:19-alpine3.15 AS build
RUN apk -U upgrade
WORKDIR /app
COPY ./ /app/
RUN npm install npm@latest -g
RUN npm update -g
RUN npm install --silent
RUN npm run build

FROM nginx:1.23.2-alpine
RUN apk -U upgrade
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]