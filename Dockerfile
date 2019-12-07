# This Dockerfile has been think to be optimized on its size and on its reconstruction, using as possible the docker cache
# The website https://www.fromlatest.io/#/ didn't find any more optimization

# Download a light image of node.js
FROM mhart/alpine-node:10.16

# If you have any question on this Dockerfile
LABEL maintainer="Maxime Brugel, maxime.brugel@gmail.com"

# Firstly, copy the package.json and the yarn.lock
COPY package.json /app/ 
COPY yarn.lock /app/ 

# Set the working directory (inside the docker container) to be in the folder /app. Every next RUN command will be located in this directory
WORKDIR /app/

# Run the command yarn install inside /app
RUN yarn install

# Once all installations done, copy the application
COPY . /app

# Run the command to build the application
RUN yarn run build

# When launching a container of this image, the command npm start will be used.
CMD ["yarn", "start"]
