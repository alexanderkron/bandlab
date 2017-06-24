all:
	npm install

	@if [ -d ./dist ] ; \
	then \
		 rm -rf ./dist ; \
	fi;

	@mkdir dist
	@mkdir dist/css

	# TODO: just copy everything that isn't .js
	@cp ./src/templates/* dist/
	@cp ./src/css/* dist/css

start:
	@node node_modules/webpack-dev-server/bin/webpack-dev-server.js

refresh:
	@cp ./src/templates/* dist/
	@cp ./src/css/* dist/css
