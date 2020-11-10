module Api
  class AttractionsController < ApplicationController
    def index
      mock_attractions = [
        {id: 'a1', name: 'Yosemite'},
        {id: 'a2', name: 'Lake Tahoe'}
      ]

      if Rails.env.development? && Random.rand < 0.5
        return render status: :internal_server_error, json: {error: 'Some cosmic rays hit us'}
      end
      render json: mock_attractions
    end
  end
end
