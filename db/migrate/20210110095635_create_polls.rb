class CreatePolls < ActiveRecord::Migration[6.1]
  def change
    create_table :polls do |t|
      t.text :topic
      t.integer :total_polls_count
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
