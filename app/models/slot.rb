class Slot < ApplicationRecord
  validates_presence_of :start_time, :end_time
  has_one :booking
end
