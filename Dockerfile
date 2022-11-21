# dev environment
FROM node:lts
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN chmod +x startup.sh
ENTRYPOINT [ "./startup.sh" ]