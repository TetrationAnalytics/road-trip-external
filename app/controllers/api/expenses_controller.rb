module Api
  class ExpensesController < ApplicationController
    def index

      expenses = mock_expenses

      if params[:user_id]
        expenses.select! {|e| e[:user_id] == params[:user_id]}
      end

      if params[:group_by_trip]
        expenses = expenses
                     .group_by {|e| e[:trip_id]}
                     .map do |id, items|
          trip = items.first.slice(:trip_id, :user_id, :destination)
          items.each do |item|
            trip[:expenses] ||= {}
            trip[:expenses][item[:category]] = item[:cost]
          end
          trip
        end
      end

      render json: expenses
    end

    private

    def mock_expenses
      [
        {trip_id: 't1', user_id: 'u1', destination: 'Yosemite', category: 'gas', cost: 200},
        {trip_id: 't1', user_id: 'u1', destination: 'Yosemite', category: 'food', cost: 100},
        {trip_id: 't1', user_id: 'u1', destination: 'Yosemite', category: 'lodging', cost: 400},
        {trip_id: 't1', user_id: 'u1', destination: 'Yosemite', category: 'misc', cost: 50},
        {trip_id: 't2', user_id: 'u2', destination: 'Los Angeles', category: 'gas', cost: 100},
        {trip_id: 't2', user_id: 'u2', destination: 'Los Angeles', category: 'lodging', cost: 200},
        {trip_id: 't2', user_id: 'u2', destination: 'Los Angeles', category: 'food', cost: 200},
        {trip_id: 't3', user_id: 'u1', destination: 'Los Angeles', category: 'misc', cost: 20},
        {trip_id: 't3', user_id: 'u1', destination: 'Los Angeles', category: 'gas', cost: 100},
        {trip_id: 't3', user_id: 'u1', destination: 'Los Angeles', category: 'food', cost: 200},
        {trip_id: 't3', user_id: 'u1', destination: 'Los Angeles', category: 'lodging', cost: 400},
        {trip_id: 't4', user_id: 'u3', destination: 'Seattle', category: 'gas', cost: 400},
        {trip_id: 't4', user_id: 'u3', destination: 'Seattle', category: 'food', cost: 200},
        {trip_id: 't4', user_id: 'u3', destination: 'Seattle', category: 'lodging', cost: 250},
        {trip_id: 't4', user_id: 'u3', destination: 'Seattle', category: 'misc', cost: 150},
        {trip_id: 't5', user_id: 'u3', destination: 'Napa', category: 'gas', cost: 50},
        {trip_id: 't5', user_id: 'u3', destination: 'Napa', category: 'food', cost: 300},
        {trip_id: 't5', user_id: 'u3', destination: 'Napa', category: 'lodging', cost: 200},
        {trip_id: 't8', user_id: 'u3', destination: 'Las Vegas', category: 'gas', cost: 200},
        {trip_id: 't8', user_id: 'u3', destination: 'Las Vegas', category: 'food', cost: 200},
        {trip_id: 't8', user_id: 'u3', destination: 'Las Vegas', category: 'lodging', cost: 200},
        {trip_id: 't8', user_id: 'u3', destination: 'Las Vegas', category: 'gambling', cost: 400},
        {trip_id: 't6', user_id: 'u2', destination: 'San Diego', category: 'food', cost: 100},
        {trip_id: 't6', user_id: 'u2', destination: 'San Diego', category: 'lodging', cost: 150},
        {trip_id: 't6', user_id: 'u2', destination: 'San Diego', category: 'gas', cost: 150},
        {trip_id: 't7', user_id: 'u1', destination: 'Tahoe', category: 'gas', cost: 200},
        {trip_id: 't7', user_id: 'u1', destination: 'Tahoe', category: 'food', cost: 150},
        {trip_id: 't7', user_id: 'u1', destination: 'Tahoe', category: 'lodging', cost: 300},
      ]
    end

  end
end
