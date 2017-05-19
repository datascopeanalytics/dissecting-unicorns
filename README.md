# dissecting-unicorns
visualization of how people become data scientists


## development

1. fork and clone this repo

1. provision your development environment
   ```sh
   mkvirtualenv dissecting-unicorns
   pip install -r requirements/python
   ```

1. go into the `web/` directory and run your flask server
    ```sh
    cd web
    export FLASK_APP=app.py
    export FLASK_DEBUG=1
    flask run
    ```

1. open http://localhost:5000 :tada:


## deployment

This uses [gunicorn to deploy the flask app on digital
ocean](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-16-04).

1. `ssh dissecting-unicorns`

1. `cd /srv/www/dissecting-unicorns`

1. `git pull origin master`

1. `sudo systemctl restart dissecting-unicorns && sudo systemctl restart nginx`
