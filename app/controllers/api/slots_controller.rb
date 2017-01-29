class Api::SlotsController < ApplicationController
  def show
    slots = Slot.includes(:booking).all.as_json(methods: [:booking])
    response = { date: Date.today, slots: slots }
    render json: response
  end
end
