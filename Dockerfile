FROM node:20.18.3

# Create app directory
WORKDIR /app

# Copy everything into container
COPY . .

# Install deps
RUN yarn install

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["yarn", "dev", "--host"]
