FROM node:10

EXPOSE 3000
ENV NUXT_PORT 3000

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR .

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
