class Api::SlotsController < ApplicationController
  def show
    render json: { date: Date.today }
  end
end
