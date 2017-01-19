class CreateScheduleEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :schedule_events do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :start_datetime, null: false
      t.datetime :end_datetime, null: false
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :schedule_events, :team_id
  end
end
