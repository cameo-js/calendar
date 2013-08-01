
REPORTER = spec
TIMEOUT = 10s

test: test-lunar test-calculator

test-lunar:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		test/test_lunar.js

test-calculator:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		test/test_calculator.js

.PHONY: test

