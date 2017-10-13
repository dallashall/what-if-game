class TeamsController < ApplicationController
  def create
    team = team.new
    code = team_code
    while Team.find_by(code: code)
      code = team_code
    end
    team.code = code
    team.save
    user = User.new(team_id: team.id)
    render json: {user: user, team: team}
  end

  def team_code
    SecureRandom::urlsafe_base64(4).upcase
  end
end
