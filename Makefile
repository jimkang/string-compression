test:
	node tests/basic-tests.cjs

pushall:
	git push origin main && npm publish --access=public
