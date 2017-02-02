class Api::SlotsController < ApplicationController
  def show
    slots = Slot.includes(:booking).all.as_json(methods: [:booking])
    date = DateTime.parse(selected_date)
    response = { date: date, slots: slots }
    render json: response
  end

  def selected_date
    params.permit(:selected_date)[:selected_date]
  end
end
