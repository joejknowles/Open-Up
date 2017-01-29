class Slot < ApplicationRecord
  validates_presence_of :start_time, :end_time
  validates_associated :booking
  has_one :booking
end
