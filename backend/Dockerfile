# Base Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install only production packages
RUN npm install --omit=dev

# Copy application
COPY . .

# Application Port
EXPOSE 3000

# Run as non-root user
USER node

# Start application
CMD ["node","server.js"]