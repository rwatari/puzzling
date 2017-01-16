class CreateSolvings < ActiveRecord::Migration[5.0]
  def change
    create_table :solvings do |t|
      t.integer :user_id, null: false
      t.integer :puzzle_id, null: false

      t.timestamps
    end
    add_index :solvings, [:user_id, :puzzle_id], unique: true
    add_index :solvings, :puzzle_id
  end
end
