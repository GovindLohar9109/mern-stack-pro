FROM node:18-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install

COPY . .

# Expose backend port


# Start the Node server
CMD ["node", "app.js"]
