# Chooses the version for the build environment
FROM node:14.15.4 as build-env

# Copy folder that will work on and sets as the workdir
COPY . ./src
WORKDIR src

# Install all the node_modules
RUN npm install 

# Chooses the node version for the runtime
FROM node:14.15.4 as runtime

COPY --from=build-env src/ src/
WORKDIR src

# Runs the command that starts the application
CMD ["npm", "start"]

# Exposes the desired port
EXPOSE 3000