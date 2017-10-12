class TeamRoomChannel < ApplicationCable::Channel
  def subscribed
    puts "Subscribed!"
    puts params[:teamRoom]
    stream_from "team_room_channel_#{params[:teamRoom]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
