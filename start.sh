#!/bin/bash
npm run serve &
echo "npm run serve executed"
json-server --host 0.0.0.0 --watch src/data/data.json
echo "json-server started"