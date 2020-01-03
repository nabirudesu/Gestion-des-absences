### Stage 1: build ###

FROM node:12.13.1-alpine as builder

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY package.json package-lock.json /app/

# Install app dependencies.
RUN npm install 

# Copy app files.
COPY . /app

# Default build configuration.
ARG configuration=production

# Build app
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# start app
CMD ng serve --port 4200


