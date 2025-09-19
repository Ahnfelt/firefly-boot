FROM node:22
USER node
RUN mkdir /home/node/app
RUN mkdir /home/node/firefly
WORKDIR /home/node/firefly
RUN npm install firefly-compiler
WORKDIR /home/node/app
COPY --chown=node:node . .
# This fetches Firefly packages but we should also do their npm install --no-bin-links
RUN [ "/home/node/firefly/node_modules/.bin/firefly", "check", "Main.ff" ]
EXPOSE 8080
ENTRYPOINT [ "/home/node/firefly/node_modules/.bin/firefly", "Main.ff", "0.0.0.0", "8080" ]

# Test it with
# podman build -t fireflysite .
# podman run -p 8080:8080 --rm -it fireflysite
