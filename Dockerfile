# Use an official Nginx runtime as a base image
FROM nginx:stable-alpine

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy the Nuxt 3 application files to the Nginx server
COPY .output/public/ /usr/share/nginx/html

# Copy your custom Nginx configuration file (if needed)
# COPY nginx-custom.conf /etc/nginx/conf.d/

# Expose the port on which Nginx will run
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]