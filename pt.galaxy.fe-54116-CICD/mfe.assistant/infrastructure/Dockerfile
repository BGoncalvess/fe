FROM node:22-alpine AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.6
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./infrastructure/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]