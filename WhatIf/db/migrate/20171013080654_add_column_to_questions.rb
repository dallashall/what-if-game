class AddColumnToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :user_id, :string
    add_column :answers, :user_id, :string
  end
end
