# == Schema Information
#
# Table name: memberships
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  team_id :integer          not null
#

class Membership < ApplicationRecord
  belongs_to :user, inverse_of: :memberships
  belongs_to :team, inverse_of: :memberships

  validates :user, :team, presence: true
  validates :user, uniqueness: { scope: :team }
end
