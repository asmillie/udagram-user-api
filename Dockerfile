# First Stage - Copy Files to Image and install npm packages
FROM node:12.18.3 as builder

WORKDIR /usr/src/app

COPY www/ .

RUN npm i --production

# Second Stage - Copy Files to slim variant of node image
FROM node:12.18.3-slim
ENV NODE_ENV=production

WORKDIR /user/src/app

COPY --from=builder /usr/src/app .

EXPOSE 8080

CMD ["node", "server.js"]