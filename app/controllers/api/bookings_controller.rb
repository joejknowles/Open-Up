class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    booking = Booking.new(slot_id_params)
    if booking.valid?
      booking.save
      render json: { booking_id: booking.id }
    else
      render json: { errors: booking.errors.full_messages }
    end
  end

  def slot_id_params
    params.permit(:slot_id)
  end
end
