module Api
  class FeedbacksController < ApplicationController
    def index
      data = Feedback.all
      render json: data
		end

    def show
      data = Feedback.find(params[:id])
      render json: data
    end

    def create
      feedback = Feedback.new(permitted_params)
      feedback.save!

      render json: feedback
    end

    def by_user
      data = Feedback.where(user_id: params[:user_id])
      render json: data
    end

    private

    def permitted_params
      params.permit(:title, :content, :author)
    end
  end
end