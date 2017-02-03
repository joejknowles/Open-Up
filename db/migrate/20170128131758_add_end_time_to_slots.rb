class AddEndTimeToSlots < ActiveRecord::Migration[5.0]
  def change
    add_column :slots, :end_time, :datetime
  end
end
