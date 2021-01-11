class User < ApplicationRecord
  has_many :poll
  has_many :vote
  before_save { self.email = email.downcase }
  validates :name, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true,
                    length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: true

  has_secure_password
  validates :password, presence: true
end
