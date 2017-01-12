class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :hunt_name, null: false
      t.integer :admin_id, null: false

      t.timestamps
    end
    add_index :teams, :name, unique: true
    add_index :teams, :admin_id
  end
end
