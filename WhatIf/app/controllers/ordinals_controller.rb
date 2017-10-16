class OrdinalsController < ApplicationController
  def set_current_ordinal
    team = Team.find_by(code: params[:code])
    if params[:ordinal] >= team.questions.count * 2
      ActionCable.server.broadcast "team_room_channel_#{params[:code]}", { type: "RECEIVE_SCREEN", screen: "Home" }
    else
      ActionCable.server.broadcast "team_room_channel_#{params[:code]}", { type: "RECEIVE_ORDINAL", ordinal: params[:ordinal] }
    end
    render json: { message: "OK" }
  end
end
