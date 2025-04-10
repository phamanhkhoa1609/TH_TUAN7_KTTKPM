from flask import Flask, render_template, request, redirect
import redis

app = Flask(__name__)
redis_client = redis.Redis(host='redis', port=6379)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        vote = request.form['vote']
        redis_client.rpush('votes', vote)
        return redirect('/')
    return '''
        <form method="post">
            <button type="submit" name="vote" value="Cats">Cats</button>
            <button type="submit" name="vote" value="Dogs">Dogs</button>
        </form>
    '''

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
