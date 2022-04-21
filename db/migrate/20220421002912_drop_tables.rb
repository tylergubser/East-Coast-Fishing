class DropTables < ActiveRecord::Migration[6.1]
  def up
    drop_table :users
    drop_table :catches
    drop_table :photos

  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
