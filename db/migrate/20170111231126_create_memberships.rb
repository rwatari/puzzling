class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :team_id, null: false
    end

    add_index :memberships, [:user_id, :team_id], unique: true
    add_index :memberships, :team_id
  end
end
