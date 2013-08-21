
REPORTER = spec
TIMEOUT = 10s

test: test-lunar test-calculator test-period test-discharge

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

test-period:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		test/test_period.js

test-discharge:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		test/test_discharge.js


.PHONY: test

