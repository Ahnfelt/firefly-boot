FROM node:24-slim AS system-stage
RUN apt update && apt install dumb-init && rm -rf /var/lib/apt/lists/* && rm -rf /var/cache/apt/archives/*
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
RUN npm install --omit=dev esbuild && rm -rf /tmp/* && rm -rf /var/tmp/*

FROM system-stage AS build-stage
RUN mkdir /home/node/firefly
WORKDIR /home/node/firefly
RUN npm install firefly-compiler
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN [ "/home/node/firefly/node_modules/.bin/firefly", "build", "Main.ff" ]
WORKDIR /home/node/app/.firefly/output/executable/ff/fireflysite/
# Remove unnecessary uws files to save space - try omitting this if you get uws errors, the version might have changed
RUN mkdir uws_temp && mv uws_linux_x64_137*.node uws_temp/. && rm uws_*.node && mv uws_temp/* . && rmdir uws_temp

FROM system-stage
COPY --from=build-stage /home/node/app/.firefly/output/executable /home/node/app/.firefly/output/executable
COPY --from=build-stage /home/node/app/.firefly/output/assets /home/node/app/.firefly/output/assets
WORKDIR /home/node/app
EXPOSE 8080
ENTRYPOINT [ "dumb-init", "node", "--harmony-temporal", "--enable-source-maps", ".firefly/output/executable/ff/fireflysite/Main.run.mjs.start.js", "0.0.0.0", "8080" ]

# Test it with
# podman build --no-cache -t ghcr.io/ahnfelt/fireflysite:test .
# podman run -p 8080:8080 --rm -it ghcr.io/ahnfelt/fireflysite:test
# podman run --entrypoint /bin/bash --rm -it ghcr.io/ahnfelt/fireflysite:test
# podman login ghcr.io -u ahnfelt # 
# podman push ghcr.io/ahnfelt/fireflysite:test
