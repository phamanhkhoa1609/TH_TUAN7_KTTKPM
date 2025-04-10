# Dùng image Python chính thức
FROM python:3.9-slim

# Tạo thư mục làm việc
WORKDIR /app

# Copy file requirements và cài đặt
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ mã nguồn
COPY . .

# Chạy ứng dụng
CMD ["python", "app.py"]
