module Api
  class UsersController < ApplicationController
    def index
      data = User.all
      render json: data
    end

    def show
      data = User.find(params[:id])
      render json: data
    end

    def create
      user = User.new(permitted_params)
      user.save!

      render json: user
    end
  end
end
