class QuestionsController < ApplicationController
  def index
    ActionCable.server.broadcast 'team_room_channel', {message: params[:message]}
    render json: {message: params[:message]}
  end
end
