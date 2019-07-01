FROM node:12

RUN npm install nodemon typescript ts-node -g

# Create and define the node_modules's cache directory.
# RUN mkdir /usr/src/cache
# WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# ADD . /usr/src/app
WORKDIR /usr/src/app

# RUN npm install

# CMD ["npm", "run", "dev"]