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

4. Install node Node (10.15.3) and activate

```
$ nvm install 10.15.3
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

1. Run

```
$ make test
```

2. Make sure both Karma and Rspec test cases pass

# Start The App

1. Run

```
$ make run
```

2. Go to `http://localhost:4000`
