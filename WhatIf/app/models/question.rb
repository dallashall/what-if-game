class Question < ApplicationRecord
  has_one :answer
  belongs_to :team
  belongs_to :user
end
