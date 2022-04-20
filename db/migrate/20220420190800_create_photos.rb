class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :name
      t.binary :data
      t.string :filename
      t.string :mime_type
      t.string :user_id
      t.string :catch_id

      t.timestamps
    end
  end
end
