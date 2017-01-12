# == Schema Information
#
# Table name: memberships
#
#  id      :integer          not null, primary key
#  user_id :string           not null
#  team_id :string           not null
#

class Membership < ApplicationRecord
  belongs_to :user, inverse_of: :memberships
  belongs_to :team, inverse_of: :memberships

  validates :user, :team, presence: true
  validates :user, uniqueness: { scope: :team }
end
