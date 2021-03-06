# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119032109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "memberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "team_id", null: false
    t.index ["team_id"], name: "index_memberships_on_team_id", using: :btree
    t.index ["user_id", "team_id"], name: "index_memberships_on_user_id_and_team_id", unique: true, using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "team_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id", using: :btree
    t.index ["team_id"], name: "index_messages_on_team_id", using: :btree
    t.index ["title"], name: "index_messages_on_title", using: :btree
  end

  create_table "puzzles", force: :cascade do |t|
    t.integer  "team_id",                     null: false
    t.string   "title",                       null: false
    t.text     "description"
    t.boolean  "solved",      default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["team_id"], name: "index_puzzles_on_team_id", using: :btree
  end

  create_table "schedule_events", force: :cascade do |t|
    t.string   "title",          null: false
    t.text     "description"
    t.datetime "start_datetime", null: false
    t.datetime "end_datetime",   null: false
    t.integer  "team_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["team_id"], name: "index_schedule_events_on_team_id", using: :btree
  end

  create_table "solvings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "puzzle_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["puzzle_id"], name: "index_solvings_on_puzzle_id", using: :btree
    t.index ["user_id", "puzzle_id"], name: "index_solvings_on_user_id_and_puzzle_id", unique: true, using: :btree
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "hunt_name",  null: false
    t.integer  "admin_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_teams_on_admin_id", using: :btree
    t.index ["name"], name: "index_teams_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
