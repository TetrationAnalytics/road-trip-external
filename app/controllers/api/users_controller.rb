module Api
  class UsersController < ApplicationController
    def index
      mock_users = [
        {id: 'u1', first_name: 'John', last_name: 'Doe', member: true},
        {id: 'u2', first_name: 'Bob', last_name: 'Jones', member: true},
        {id: 'u3', first_name: 'Carl', last_name: 'Smith', member: false}
      ]
      render json: mock_users
    end
  end
end
