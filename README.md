This project provides a reference solution for paired programming interviews.

# Preliminary Installations

Before you run `make test` below, rvm-based ruby and legacy version of node.js are required. Please install them as follows:

1. Install RVM as described here: https://rvm.io/rvm/install. As described in https://rvm.io/workflow/scripting. Make sure your .bash_profile has the following
  
  `[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*`

2. Install Ruby-2.5.3

  `$rvm install ruby-2.7.1`

3. Install Node Version Manager `nvm`

  ```
  brew install nvm
  ```

4. Install node Node (10.15.3) and activate 

  ```
  nvm install 10.15.3
  ```

5. Install bundler

  `gem install bundler`

6. Install the rest of the packages

  `make install`


# Verify your Setup
Run `make test` and make sure both Karma and Rspec test cases pass

