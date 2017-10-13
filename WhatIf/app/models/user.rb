class User < ApplicationRecord
  belongs_to :team
  has_many :questions
  has_many :answers
end
