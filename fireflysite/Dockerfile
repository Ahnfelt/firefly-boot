FROM node:22
RUN apt update && apt install dumb-init
USER node
RUN mkdir /home/node/firefly && mkdir /home/node/app
WORKDIR /home/node/firefly
RUN npm install firefly-compiler
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN [ "/home/node/firefly/node_modules/.bin/firefly", "build", "Main.ff" ]
EXPOSE 8080
ENTRYPOINT [ "dumb-init", "node", "--harmony-temporal", ".firefly/output/executable/ff/fireflysite/Main.run.js", "0.0.0.0", "8080" ]

# Test it with
# podman build -t fireflysite .
# podman run -p 8080:8080 --rm -it fireflysite
