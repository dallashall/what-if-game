class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :body
      t.integer :team_id

      t.timestamps
    end
  end
end
