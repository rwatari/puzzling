# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  hunt_name  :string
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  has_many :memberships,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user

  belongs_to :admin,
    class_name: :User,
    foreign_key: :admin_id

  validates :name, :hunt_name, presence: true
  validates :name, uniqueness: true
end
