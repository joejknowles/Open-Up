# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
#

def add_default_slots
  start_hours = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]
  start_hours.each do |start_hour|
    start_time = Time.new(1970, 10, 10, start_hour, 0, 0, '+00:00')
    end_time = Time.new(1970, 10, 10, start_hour + 1, 0, 0, '+00:00')
    Slot.create(start_time: start_time, end_time: end_time)
  end
end

add_default_slots if Slot.all.empty?
