all:
	@if [ -d ./dist ] ; \
	then \
		 rm -rf ./dist ; \
	fi;

	@mkdir dist
	@cp ./src/templates/* dist/

	@echo "Build successful"

start:
	@node node_modules/webpack-dev-server/bin/webpack-dev-server.js
