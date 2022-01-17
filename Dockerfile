### STAGE 1: Build ###
FROM node:14-alpine AS builder
WORKDIR E:\VsCode\workspace\my-app\my-app\src\app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.13.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder E:\VsCode\workspace\my-app\my-app\src\app E:\VsCode\workspace\my-app\my-app\src\index.html;
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]