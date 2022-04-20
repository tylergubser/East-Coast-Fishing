class CreateCatches < ActiveRecord::Migration[6.1]
  def change
    create_table :catches do |t|
      t.string :bait
      t.string :fish_type
      t.integer :fish_weight
      t.integer :user_id

      t.timestamps
    end
  end
end
