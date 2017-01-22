class Api::SlotsController < ApplicationController
  def show
    slots = Slot.all
    response = { date: Date.today, slots: slots }
    render json: response
  end
end
