# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :team

  validates :team, :author, :title, :body, presence: true
end
