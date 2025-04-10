# Dùng image Node.js chính thức
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package và cài dependencies
COPY package.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chạy ứng dụng
CMD ["npm", "start"]



