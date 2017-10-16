class QuestionsController < ApplicationController
  def create
    question = Question.new(question_params)
    puts question
    if question.save
      team = Team.find_by(id: question_params[:team_id])
      if team.questions.count === team.users.count
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_QUESTIONS", questions: team.shuffled_questions }
      else
        ActionCable.server.broadcast "team_room_channel_#{team.code}", { type: "RECEIVE_QUESTIONS", questions: team.questions_hash }
      end
      render json: { message: "OK" }
    else
      render json: { message: question.errors.full_messages }, status: 401
    end
  end

  def continue_without_players
    # todo
    # destroy users without questions
    # send members
    # send shuffled questions
  end

  private

  def question_params
    puts params
    params.require(:question).permit(:team_id, :body, :user_id)
  end
end
