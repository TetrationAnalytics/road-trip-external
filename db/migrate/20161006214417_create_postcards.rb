class CreatePostcards < ActiveRecord::Migration
  def change
    create_table :postcards do |t|
      t.string :to
      t.string :from
      t.text :message

      t.timestamps
    end
  end
end
