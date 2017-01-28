class ChangeStartTimeToTime < ActiveRecord::Migration[5.0]
  def change
    change_column :slots, :start_time, :time
  end
end
