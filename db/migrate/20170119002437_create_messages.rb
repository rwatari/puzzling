class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :team_id, null: false
      t.timestamps
    end

    add_index :messages, :title
    add_index :messages, :author_id
    add_index :messages, :team_id
  end
end
