class Team < ApplicationRecord
  has_many :questions
  has_many :answers, through: :questions
  has_many :users

  after_initialize :set_team_code!

  def set_team_code!
    self.code ||= generate_team_code
  end

  def team_code
    SecureRandom::urlsafe_base64(3).upcase
  end

  def generate_team_code
    code = team_code
    while Team.find_by(code: code)
      code = team_code
    end
    code
  end

  def questions_hash
    hsh = {}
    self.questions.each do |question|
      hsh[question.user_id] = question
    end
    hsh
  end

  def shuffled_questions
    hsh = {}
    user_ids = self.questions.map(&:user_id)
    shuffled_ids = user_ids.shuffle
    qs = questions_hash
    user_ids.each_with_index do |id, idx|
      hsh[id] = qs[shuffled_ids[idx]]
    end
    hsh
  end

  def answers_hash
    hsh = {}
    self.answers.each do |answer|
      hsh[answer.user_id] = answer
    end
    hsh
  end

  def shuffled_answers
    hsh = {}
    user_ids = self.answers.map(&:user_id)
    shuffled_ids = user_ids.shuffle
    qs = answers_hash
    user_ids.each_with_index do |id, idx|
      hsh[id] = qs[shuffled_ids[idx]]
    end
    hsh
  end

  def arrangement
    arr = []
    as = shuffled_answers
    questions.each do |question|
      mixed_answer = as[question.user_id]
      q = {}
      q[question.user_id] = question
      arr.push(q)
      a = {}
      a[mixed_answer.user_id] = mixed_answer
      arr.push(a)
    end
    arr
  end
end
