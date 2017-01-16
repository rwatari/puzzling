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

require 'test_helper'

class PuzzleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
