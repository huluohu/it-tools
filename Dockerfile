# build stage
FROM node:latest AS build-stage
# Set environment variables for non-interactive npm installs
ENV NPM_CONFIG_LOGLEVEL warn
ENV CI true
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g cross-env
RUN npm install -g pnpm  --registry=https://registry.npmmirror.com && pnpm i --frozen-lockfile
COPY . .
RUN pnpm build

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
