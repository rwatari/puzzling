# == Schema Information
#
# Table name: puzzles
#
#  id          :integer          not null, primary key
#  team_id     :integer          not null
#  title       :string           not null
#  description :text
#  solved      :boolean          default("false")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Puzzle < ApplicationRecord
  belongs_to :team

  has_many :solvings,
    dependent: :destroy,
    inverse_of: :puzzle

  has_many :solvers,
    through: :solvings,
    source: :user
    
  validates :team, :title, presence: true
  validates :solved, inclusion: [true, false]
end
