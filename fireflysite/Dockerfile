FROM node:22-slim AS system-layer
RUN apt update && apt install dumb-init
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm install --production esbuild

FROM system-layer AS build-layer
RUN mkdir /home/node/firefly
WORKDIR /home/node/firefly
RUN npm install --production firefly-compiler
WORKDIR /home/node/app
RUN [ "/home/node/firefly/node_modules/.bin/firefly", "build", "Main.ff" ]
RUN rm -r /home/node/app/.firefly/dependencies && rm -r /home/node/app/routes/.firefly/dependencies

FROM system-layer
COPY --from=build-layer /home/node/app /home/node/app
WORKDIR /home/node/app
EXPOSE 8080
ENTRYPOINT [ "dumb-init", "node", "--harmony-temporal", "--enable-source-maps", ".firefly/output/executable/ff/fireflysite/Main.run.mjs.start.js", "0.0.0.0", "8080" ]

# Test it with
# podman build --no-cache -t fireflysite .
# podman run -p 8080:8080 --rm -it fireflysite
# podman run --entrypoint /bin/bash --rm -it fireflysite
