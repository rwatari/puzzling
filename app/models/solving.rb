# == Schema Information
#
# Table name: solvings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  puzzle_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Solving < ApplicationRecord
  belongs_to :user, inverse_of: :solvings
  belongs_to :puzzle, inverse_of: :solvings

  validates :user, :puzzle, presence: true
  validates :user, uniqueness: { scope: :puzzle }
end
