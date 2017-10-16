class AnswersController < ApplicationController
  def create
    answer = Answer.new(answer_params)

    if answer.save
      team = answer.question.team
      if team.answers.count === team.questions.count
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_ANSWERS", answers: team.shuffled_answers }
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_ARRANGEMENT", arrangement: team.arrangement, ordinal: 0 }
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_SCREEN", screen: "TurnLobby" }
      else
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_ANSWERS", answers: team.answers_hash }
      end
      render json: { type: "STATUS", message: "OK" }
    else
      render json: { message: answer.errors.full_messages }, status: 401
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :body, :user_id)
  end
end
