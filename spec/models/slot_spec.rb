require 'rails_helper'

describe Slot, type: :model do
  it "is invalid without a start time" do
    slot = Slot.create(end_time: Time.now)
    expect(slot.errors[:start_time].size).to be(1)
  end

  it "is invalid without an end time" do
    slot = Slot.create(start_time: Time.now)
    expect(slot.errors[:end_time].size).to be(1)
  end

  it "is invalid without a start and end time" do
    slot = Slot.create()
    expect(slot.errors.size).to be(2)
  end

  it "is valid without a start and end time" do
    slot = Slot.create(start_time: Time.now, end_time: Time.now)
    expect(slot.errors.size).to be(0)
  end

  it "can have one booking" do
    slot = Slot.new(booking: Booking.new)
    expect(slot.booking).not_to be(nil)
  end
end
