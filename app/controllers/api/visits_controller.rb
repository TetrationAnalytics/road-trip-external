module Api
  class VisitsController < ApplicationController
    def index
      mock_visits = [
        {ts: 1475535038, user_id: 'u1', attraction_id: 'a1'},
        {ts: 1475535038, user_id: 'u2', attraction_id: 'a1'},
        {ts: 1475621397, user_id: 'u1', attraction_id: 'a2'},
        {ts: 1475621222, user_id: 'u2', attraction_id: 'a1'}
      ]
      render json: mock_visits
    end
  end
end
