class Option < ApplicationRecord
  belongs_to :poll
  has_many :vote
  attribute :vote_count, :integer, default: 0
end
