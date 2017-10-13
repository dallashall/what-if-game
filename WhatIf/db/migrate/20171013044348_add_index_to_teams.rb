class AddIndexToTeams < ActiveRecord::Migration[5.0]
  def change
    add_index :teams, :code, unique: true
  end
end
