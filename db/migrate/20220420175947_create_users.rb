class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string "username"
      t.string "given_name"
      t.string "last_name"
      t.timestamps
    end
  end
end
