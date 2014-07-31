# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Score.delete_all

score_one = Score.create ({
  player: "Ben",
  level1: 1.1,
  level1: 2.2,
  level1: 3.3,
  level1: 4.4,
  total: 100.123,
})