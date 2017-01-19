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

class ScheduleEvent < ApplicationRecord
  belongs_to :team

  validates :title, :team, :start_datetime, :end_datetime, presence: true
  validate :start_before_end_time

  private

  def start_before_end_time
    if start_datetime >= end_datetime
      errors.add(:schedule_event, "start must be before end")
    end
  end
end
