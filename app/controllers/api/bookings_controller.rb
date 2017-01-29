class Api::BookingsController < ApplicationController
  def create
    booking = Booking.create(slot_id: slot_id)
    response = { booking: booking }
    render json: response
  end

  def slot_id
    params.permit(:slot_id)
  end
end
