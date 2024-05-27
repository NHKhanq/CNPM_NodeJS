FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5000
CMD ["npm", "start"]