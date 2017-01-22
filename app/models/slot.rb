class Slot < ApplicationRecord
  validates :start_time, presence: true
end
