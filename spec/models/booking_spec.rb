require 'rails_helper'

describe Booking, type: :model do
  it "is invalid without a slot" do
    slot = Slot.create()
    expect(slot.errors[:slot].size).to be(1)
  end
end
