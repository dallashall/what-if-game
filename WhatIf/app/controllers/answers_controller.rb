class AnswersController < ApplicationController
  def create
    answer = Answer.new(answer_params)

    if answer.save
      team = Team.find_by(answer_params[:team_id])
      if team.answers.count === team.questions.count
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_ANSWERS", answers: team.shuffled_answersh }
      else
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_ANSWERS", answers: team.answers_hash }
      end
      render json: { message: "OK" }
    else
      render json: { message: answer.errors.full_messages }, status: 401
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :body, :user_id)
  end
end
