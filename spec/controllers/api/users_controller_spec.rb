require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  let(:json) { JSON.parse(response.body) }

  describe '#index' do
    it 'returns users' do
      get :index, format: 'json'
      expect(response).to have_http_status(:success)
    end
  end
end
