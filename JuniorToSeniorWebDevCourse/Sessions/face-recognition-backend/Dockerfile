FROM node:18-alpine

WORKDIR /app

COPY ./ ./

# Image Build Step
# These are what are run to "build" the container image
# There can be multiple RUN steps
RUN npm install

#  Executing a command. There can only be one of these
CMD ["/bin/bash"]
