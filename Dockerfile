# Dockerfile
FROM node:14-alpine AS build

WORKDIR /melo_rafael_ui_garden

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /melo_rafael_ui_garden/build /usr/share/nginx/html

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
