FROM nginx:alpine

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy static website
COPY ./ /usr/share/nginx/html/

# Remove files not needed in production
RUN rm -rf /usr/share/nginx/html/nginx.conf \
    /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/.git \
    /usr/share/nginx/html/.gitignore \
    /usr/share/nginx/html/.dockerignore \
    /usr/share/nginx/html/memory-bank \
    /usr/share/nginx/html/.cursor

# Set proper permissions for all files
RUN chmod -R 755 /usr/share/nginx/html

ARG api_url
ENV API_URL=${api_url}

EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"] 