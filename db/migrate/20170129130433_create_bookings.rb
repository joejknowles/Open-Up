class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.belongs_to :slot, foreign_key: true

      t.timestamps
    end

    add_index :bookings, :slot_id, unique: true, name: :unique_slot_bookings
  end
end
