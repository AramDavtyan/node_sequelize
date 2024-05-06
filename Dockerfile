# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application's files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["node", "--inspect=0.0.0.0:9229", "dist/main.js"]