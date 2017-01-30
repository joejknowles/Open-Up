class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    booking = Booking.create(slot_id_params)
    response = { booking: booking }
    render json: response
  end

  def slot_id_params
    params.permit(:slot_id)
  end
end
