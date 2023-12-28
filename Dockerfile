# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Set Environment Variable
# ENV BASE_URL_PROD=${BASE_URL_PROD}
# ENV API_KEY_PROD=${API_KEY_PROD}
# ENV BASE_URL_DEV=${BASE_URL_DEV}
# ENV API_KEY_DEV=${API_KEY_DEV}
# ENV ENC_KEY=${ENC_KEY}
# ENV USER_LIST=${USER_LIST}

# Copy the rest of the application code
COPY . .

# Build the Nuxt application
RUN npm run build

# Stage 2: Create a smaller image with only the necessary artifacts
FROM node:18-alpine

WORKDIR /app

# Copy only the built files from the previous stage
COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package*.json ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Nuxt app
CMD ["node", ".output/server/index.mjs"]
