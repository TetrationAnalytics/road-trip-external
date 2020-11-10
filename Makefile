.PHONY: install test run

install:
	bundle install
	yarn

clean:
	rm -rf vendor/assets/components/*
	rm -rf tmp/cache/assets/development/*

test:
	bundle exec rspec -fd
	yarn run test

run:
	bundle exec rails db:migrate
	guard start
