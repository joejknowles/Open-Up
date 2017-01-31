class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    booking = Booking.new()
    if booking.save
      render json: { booking_id: booking.id }
    else
      response = { json: { errors: booking.errors.full_messages }, status: 422 }
      render response
    end
  end

  def slot_id_params
    params.permit(:slot_id)
  end
end
