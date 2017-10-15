class OrdinalsController < ApplicationController
  def set_current_ordinal
    ActionCable.server.broadcast "team_room_channel_#{params[:code]}", { type: "RECEIVE_ORDINAL", ordinal: params[:ordinal] }
    render json: { message: "OK" }
  end
end
