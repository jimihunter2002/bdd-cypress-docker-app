#base image
FROM cypress/base:12.4.0

# set working directory
WORKDIR /app

#copy cypress files and folders
COPY package.json yarn.lock ./

# set CI environment variable to suppress progress messages
# ENV CI=1
# RUN yarn ci
RUN yarn install

# confirm the cypress install
RUN npx cypress verify
