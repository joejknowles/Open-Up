task refresh: :environment do
  refresh_slots
end

def refresh_slots
  Booking.destroy_all
  Slot.destroy_all
  sh 'rake', 'db:seed'
end
