.PHONY: install brain-games publish make lint

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx exlint .