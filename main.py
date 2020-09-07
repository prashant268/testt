from flask import Flask, jsonify,render_template
from flask_cors import CORS


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# sanity check route
@app.route('/', methods=['GET'])
def ping_pong():
    return render_template('index.html')



if __name__ == '__main__':
    app.run()