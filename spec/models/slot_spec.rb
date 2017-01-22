require 'rails_helper'

describe Slot, type: :model do
  it "is invalid without a start time" do
    slot = Slot.create
    expect(slot.errors[:start_time].size).to be(1)
  end
end
