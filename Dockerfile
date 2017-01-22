FROM node:6.9.4-yarn

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install with Yarn
ADD package.json yarn.lock /tmp/

WORKDIR /tmp

# Install
RUN yarn

# Link Dependencies
RUN cd /opt/app && ln -s /tmp/node_modules

# Copy Project
COPY . /opt/app

WORKDIR /opt/app

# Build project
RUN npm run build

CMD node build/server.js