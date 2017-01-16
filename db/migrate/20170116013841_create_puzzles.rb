class CreatePuzzles < ActiveRecord::Migration[5.0]
  def change
    create_table :puzzles do |t|
      t.integer :team_id, null: false
      t.string :title, null: false
      t.text :description
      t.boolean :solved, default: false

      t.timestamps
    end
    add_index :puzzles, :team_id
  end
end
