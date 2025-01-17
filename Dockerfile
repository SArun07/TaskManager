FROM node:alpine3.18 as build

# Declare build time envoirment variable
ARG REACT_APP_BASE_URL

# Set default values for envoirment variable
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

# Build app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off" ]