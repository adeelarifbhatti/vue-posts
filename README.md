# Simple Vue-posts with json-server (no backend)


The frontend app has no real backend, it just queries the json-server (src/data/data.json), src/composables folder has the getposts.js and getpost.js.

Content of .env file is following, this is the json-server (our backend :D)

process.env.VUE_APP_URL = 'http://localhost:3000/posts'

To run the app, just clone it and execute following command 
#### docker-compose up
