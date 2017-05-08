import os
import json

from flask import Flask, request
from flask import render_template

from flask_restful import Resource, Api

# configure flask app
app = Flask(__name__)
api = Api(app)
app.data_folder = os.path.join(app.static_folder, 'data')


@app.route("/")
def home():
    return render_template("home.html")


class Person(Resource):
    """Save data from LinkedIn.
    """

    def post(self):
        linkedin_data = request.json
        filename = os.path.join(app.data_folder, linkedin_data['id'] + '.json')
        with open(filename, 'w') as stream:
            json.dump(linkedin_data, stream)


api.add_resource(Person, '/person')
