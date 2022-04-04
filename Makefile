dev:
	@echo "Hello World"	
	@deno run --allow-net --allow-read --allow-env --import-map=./import_map.json src/server.js