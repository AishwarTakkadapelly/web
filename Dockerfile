# Step 1: Use an x86_64 Node.js 14 runtime as the base image for building
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app using Webpack (adjust this as per your build script)
RUN npm run buildmovecloudWeb

# Step 2: Create a lightweight production image
FROM node:14-alpine AS production

# Set the working directory
WORKDIR /app

# Install a simple HTTP server for serving static files
RUN npm install -g serve

# Copy only the built app from the build stage
COPY --from=build /app/dist /app/dist

# Run the React app using the serve package
CMD ["serve", "-s", "dist", "-l", "9001"]

# Expose the port the app will run on
EXPOSE 9001
