class Api::SlotsController < ApplicationController
  def show
    response = { date: Date.today, slots: [{id: 1}, {id: 2} ] }.to_json
    render json: response
  end
end
