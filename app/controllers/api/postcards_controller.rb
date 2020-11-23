module Api
  class PostcardsController < ApplicationController
    def index
      render json: Postcard.all
    end

    def show
      render json: Postcard.find(params[:id])
    end

    def create
      postcard = Postcard.new(permitted_params)
      postcard.save!

      render json: postcard
    end

    def by_user
      render json: Postcard.where(user_id: params[:user_id])
    end

    private

    def permitted_params
      params.permit(:to, :from, :message)
    end
  end
end
