# Summary

This project provides a reference solution for paired programming interviews.

# Preliminary Installations

Rvm-based ruby and legacy version of node.js are required:

1. Please install RVM as described here:

   - https://rvm.io/rvm/install
   - https://rvm.io/workflow/scripting

2. Make sure your `.bash_profile` has the following

```
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
```

2. Install Ruby-2.7.1

```
$ rvm install ruby-2.7.1
```

3. Install Node Version Manager `nvm`

```
$ brew install nvm
```

4. Install node Node (12.18.4) and activate

```
$ nvm install
```

5. Install bundler

```
$ gem install bundler
```

6. Install the rest of the packages

```
$ make install
```

# Verify Your Setup

1. Run the tests and make sure both Karma and Rspec test cases are passing

```
$ make test
```

# Start The App

By default rails server will listen on port 4000:

    $ make run

To provide a different port:

    $ PORT=5000 make run

To start incremental asset compilation and auto-reload via webpack-dev-server, in a separate
terminal run:

    $ bin/webpack-dev-server


2. Go to `http://localhost:4000`
