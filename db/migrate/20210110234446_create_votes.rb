class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.belongs_to :poll, index: true, foreign_key: true
      t.belongs_to :option, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
