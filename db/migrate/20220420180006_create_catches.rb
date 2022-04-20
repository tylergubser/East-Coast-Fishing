class CreateCatches < ActiveRecord::Migration[6.1]
  def change
    create_table :catches do |t|
      t.integer "weight"
      t.string "location"
      t.integer "caption"
      t.integer "bait"
      t.integer "fishBreed"
      t.integer "user_id"
      t.timestamps
    end
  end
end
