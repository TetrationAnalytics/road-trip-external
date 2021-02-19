# Summary

This project provides a reference solution for paired programming interviews.

# Preliminary Installations

Ruby and Node.js are required and managed via rvm and nvm. Versions are listed in `.ruby-version` and `.nvmrc` respectively.

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

On macOS via [Homebrew](https://brew.sh/):

```
$ brew install nvm
```

Alternative install instructions for macOS, Linux, and Windows (WSL) available on [the nvm repo](https://github.com/nvm-sh/nvm#install-script).

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
