# Stage 1: Build React frontend
FROM node:20

WORKDIR /client

# Copy package files and install dependencies

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Expose and start

CMD ["npm", "start"]
