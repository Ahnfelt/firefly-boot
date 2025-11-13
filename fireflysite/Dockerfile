FROM node:22-slim
RUN apt update && apt install dumb-init
USER node
RUN mkdir /home/node/firefly && mkdir /home/node/app
WORKDIR /home/node/firefly
RUN npm install firefly-compiler
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm install esbuild
RUN [ "/home/node/firefly/node_modules/.bin/firefly", "build", "Main.ff" ]
EXPOSE 8080
ENTRYPOINT [ "dumb-init", "node", "--harmony-temporal", "--enable-source-maps", ".firefly/output/executable/ff/fireflysite/Main.run.mjs.start.js", "0.0.0.0", "8080" ]

# Test it with
# podman build --no-cache -t fireflysite .
# podman run -p 8080:8080 --rm -it fireflysite
# podman run --entrypoint /bin/bash --rm -it fireflysite
