# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_10_234446) do

  create_table 'options', force: :cascade do |t|
    t.text 'option'
    t.integer 'vote_count'
    t.integer 'poll_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['poll_id'], name: 'index_options_on_poll_id'
  end

  create_table 'polls', force: :cascade do |t|
    t.text 'topic'
    t.integer 'total_polls_count'
    t.integer 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['user_id'], name: 'index_polls_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name'
    t.string 'email'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'password_digest'
    t.index ['email'], name: 'index_users_on_email', unique: true
  end

  create_table 'votes', force: :cascade do |t|
    t.integer 'poll_id'
    t.integer 'option_id'
    t.integer 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['option_id'], name: 'index_votes_on_option_id'
    t.index ['poll_id'], name: 'index_votes_on_poll_id'
    t.index ['user_id'], name: 'index_votes_on_user_id'
  end

  add_foreign_key 'options', 'polls'
  add_foreign_key 'polls', 'users'
  add_foreign_key 'votes', 'options'
  add_foreign_key 'votes', 'polls'
  add_foreign_key 'votes', 'users'
end
