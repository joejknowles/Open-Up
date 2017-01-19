class SlotsController < ApplicationController
  def index
    render json: { date: Date.today}
  end
end
