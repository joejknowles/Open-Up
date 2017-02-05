class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.belongs_to :slot, foreign_key: true, unique: true

      t.timestamps
    end
  end
end
