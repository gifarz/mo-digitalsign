# # multi-stage build
# FROM node:20.10.0-alpine AS builder
# WORKDIR /my-nuxt-app
# COPY . /my-nuxt-app
# RUN npm ci
# RUN npm run build
# EXPOSE 3000

# Stage 1: Build the application
FROM node:20.10.0-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt application
RUN npm run build

# Stage 2: Create a smaller image with only the necessary artifacts
FROM node:20.10.0-alpine

WORKDIR /app

# Copy only the built files from the previous stage
COPY --from=builder /app/.nuxt .nuxt
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package*.json ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Nuxt app
CMD ["nuxt", "start"]
