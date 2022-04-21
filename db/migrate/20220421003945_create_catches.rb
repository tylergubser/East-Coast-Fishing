class CreateCatches < ActiveRecord::Migration[6.1]
  def change
    create_table :catches do |t|
      t.string :name
      t.integer :weight
      t.string :location
      t.string :caption
      t.string :bait
      t.string :fishBreed
      t.integer :user_id

      t.timestamps
    end
  end
end
