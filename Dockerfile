# FROM node:20-alpine

# WORKDIR /Users/ankitajogekar/Documents/university-research-website/src

# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npm run build

# RUN npm install -g serve

# EXPOSE 80

# CMD ["serve", "-s", "build", "-l", "80"]

# Use an official node image that supports ARM64
FROM arm64v8/node:16 AS build
 
# Set working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
 
# Install dependencies
RUN npm install
 
# Copy the entire React app source to the container
COPY . .
 
# Build the React app for production
RUN npm run build
 
# Stage 2: Serve the React app using Nginx or a lightweight server
FROM arm64v8/nginx:alpine
 
# Copy the build output from the previous stage to Nginx’s web root
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose the port that Nginx will use to serve the app
EXPOSE 80
 
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]