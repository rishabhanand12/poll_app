class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.text :option
      t.integer :vote_count
      t.belongs_to :poll, index: true, foreign_key: true

      t.timestamps
    end
  end
end
