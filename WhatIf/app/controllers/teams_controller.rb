class TeamsController < ApplicationController
  def create
    team = Team.new
    code = team_code
    while Team.find_by(code: code)
      code = team_code
    end
    team.code = code
    team.save
    user = User.create(team_id: team.id)
    render json: {user: user, team: team, members: team.users.count}
  end

  def team_code
    SecureRandom::urlsafe_base64(3).upcase
  end
end
