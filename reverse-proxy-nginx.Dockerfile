FROM nginx:alpine
ADD reverse-proxy-nginx.conf /etc/nginx/conf.d/default.conf