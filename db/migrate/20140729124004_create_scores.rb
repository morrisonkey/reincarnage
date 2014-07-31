class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.string :player
      t.float :level1
      t.float :level2
      t.float :level3
      t.float :level4
      t.float :total

      t.timestamps
    end
  end
end
