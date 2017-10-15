class QuestionsController < ApplicationController
  def create
    question = Question.new(question_params)

    if question.save
      team = Team.find_by(question_params[:team_id])
      ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_QUESTIONS", questions: team.questions_hash }
      render json: { message: "OK" }
    else
      render json: { message: question.errors.full_messages }, status: 401
    end
  end

  private

  def question_params
    params.require(:question).permit(:team_id, :body, :user_id)
  end
end
