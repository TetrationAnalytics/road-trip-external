module Api
  class PostcardsController < ApplicationController
    def index
      render json: Postcard.all
    end

    def create
      postcard = Postcard.new(permitted_params)
      sleep(5) # it takes a long time to send a postcard
      postcard.save!

      render json: postcard
    end

    private

    def permitted_params
      params.permit(:to, :from, :message)
    end
  end
end
