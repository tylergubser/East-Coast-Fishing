class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string "name", null: false
      t.binary "data", null: false
      t.string "filename"
      t.string "mime_type"
      t.integer "user_id"
      t.integer "catch_id"
      t.timestamps
    end
  end
end
