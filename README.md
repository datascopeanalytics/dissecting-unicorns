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
