class Booking < ApplicationRecord
  validates :slot, uniqueness: true
  belongs_to :slot
end
