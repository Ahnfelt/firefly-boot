FROM node:24
RUN mkdir /home/node/app && chown -R node:node /home/node/app
RUN mkdir /home/node/firefly && chown -R node:node /home/node/firefly
# COPY package*.json ./
USER node
WORKDIR /home/node/firefly
RUN npm install firefly-compiler
WORKDIR /home/node/app
COPY --chown=node:node . .
EXPOSE 8080
ENTRYPOINT [ "/home/node/firefly/node_modules/.bin/firefly", "Main.ff" ]

# Test it with
# podman build -t my-image .
# podman run -it --name my-container my-image
