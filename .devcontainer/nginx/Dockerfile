FROM nginx:alpine

RUN mkdir -p /usr/local/nginx
RUN mkdir -p /var/www/html
COPY conf   /usr/local/nginx/conf
COPY html   /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf

# WORKDIR /usr/local/nginx 
