from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello from Flask + Traefik!"

if __name__ == '__main__':
    # Phải có dòng này để Flask không tắt sau khi chạy
    app.run(host='0.0.0.0', port=5000)
