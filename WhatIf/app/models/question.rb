class Question < ApplicationRecord
  has_many :answers
  belongs_to :team
  belongs_to :user
end
