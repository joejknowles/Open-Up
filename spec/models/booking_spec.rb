require 'rails_helper'

describe Booking, type: :model do
  it "is invalid without a slot" do
    booking = Booking.new()
    booking.valid?
    expect(booking.errors[:slot].size).to be(1)
  end

  it "is invalid with slot that's already booked" do
    slot_id = Slot.create(start_time: Time.now, end_time: Time.now).id
    booking1 = Booking.create(slot_id: slot_id)
    booking2 = Booking.new(slot_id: slot_id)
    booking2.valid?
    expect(booking2.errors[:slot].size).to be(1)
  end
end
