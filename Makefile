all:
	cp ./src/templates/index.html dist/
	cp ./src/templates/posts.html dist/
	cp ./src/templates/samples.html dist/

start:
	node node_modules/webpack-dev-server/bin/webpack-dev-server.js
