# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  has_many :memberships,
    dependent: :destroy,
    inverse_of: :user

  has_many :joined_teams,
    through: :memberships,
    source: :team

  has_many :admined_teams,
    class_name: :Team,
    foreign_key: :admin_id

  has_many :solvings,
    dependent: :destroy,
    inverse_of: :user

  has_many :puzzles,
    through: :solvings,
    source: :puzzle

  has_many :posts,
    class_name: :Message,
    foreign_key: :author_id

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(128)
  end
end
