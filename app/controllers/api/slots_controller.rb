class Api::SlotsController < ApplicationController
  def show
    date = DateTime.parse(selected_date)
    slots = Slot.includes(:booking).where(start_time: date.beginning_of_day..date.end_of_day).as_json(methods: [:booking])
    response = { date: date, slots: slots }
    render json: response
  end

  def selected_date
    params.permit(:selected_date)[:selected_date]
  end
end
