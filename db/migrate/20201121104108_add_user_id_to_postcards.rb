class AddUserIdToPostcards < ActiveRecord::Migration[5.2]
  def change
    add_column :postcards, :user_id, :integer
  end
end
