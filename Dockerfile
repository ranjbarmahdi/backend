# Base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the build context root
COPY package*.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["node", "src/server.js"]
