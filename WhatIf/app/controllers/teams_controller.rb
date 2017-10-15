class TeamsController < ApplicationController
  def create
    @team = Team.create
    make_user
    render json: info_hash
  end

  def join
    @team = Team.find_by(code: params[:code].upcase)
    if @team
      make_user
      ActionCable.server.broadcast "team_room_channel_#{@team.code}", { type: "RECEIVE_TEAM", team: @team, members: @team.users.count }
      render json: info_hash
    else
      render json: {message: 'Team not found'}, status: 404
    end
  end

  private


  def make_user
    @user = User.create(team_id: @team.id)
  end

  def info_hash
    { type: "RECEIVE_TEAM_AND_USER", user: @user, team: @team, members: @team.users.count}
  end
end
