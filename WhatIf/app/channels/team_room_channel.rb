class TeamRoomChannel < ApplicationCable::Channel
  def subscribed
    puts "Subscribing!"
    team = Team.find_by(code: params[:teamRoom])
    if team
      puts params
      # @user = User.find_by(id: params[:user][:id])
      stream_from "team_room_channel_#{params[:teamRoom]}"
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # @user.destroy
  end
end
