FROM node:14.8.0-alpine3.11 AS brain-builder

# Set up base directory
WORKDIR /app

# Cache node_modules as a separate layer
COPY package*.json yarn.lock ./
COPY prisma ./prisma/
RUN yarn install
RUN yarn gen-prisma

# Add node_modules binaries to the PATH
ENV PATH="/usr/src/app/node_modules/.bin:$PATH"

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Copy app contents
COPY . .

RUN yarn gen-nexus

# Compile TypeScript
RUN yarn build
# Default run command
CMD ["yarn", "start"]