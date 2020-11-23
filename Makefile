.PHONY: install test run

install:
	bundle install
	yarn install
	bundle exec rails db:reset

clean:
	rm -rf vendor/assets/components/*
	rm -rf tmp/cache/assets/development/*
	rm -rf node_modules

test:
	bundle exec rspec -fd
	yarn run test

run:
	guard start
