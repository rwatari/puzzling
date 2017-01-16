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

require 'test_helper'

class SolvingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
