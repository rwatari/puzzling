# == Schema Information
#
# Table name: schedule_events
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :text
#  start_datetime :datetime         not null
#  end_datetime   :datetime         not null
#  team_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class ScheduleEventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
