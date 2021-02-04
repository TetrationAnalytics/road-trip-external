# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user_list = [
  { first_name: "John", last_name: "Doe", member: true },
  { first_name: "Bob", last_name: "Jones", member: true },
  { first_name: "Carl", last_name: "Smith", member: false}
]

users = User.create(user_list)

postcards = [
  { from: "John", to: "Amy", message: "It is a fun trip!", user_id: users[0].id },
  { from: "John", to: "Dad", message: "Visit you soon!", user_id: users[0].id },
  { from: "Carl", to: "Mim", message: "Miss you!", user_id: users[2].id },
  { from: "Bob", to: "Sarah", message: "Yosemite is Beautiful!", user_id: users[1].id }
]

Postcard.create(postcards)

feedbacks = [
	{ title: "Fun place 1", content: "11 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[0].id },
	{ title: "Fun place 2", content: "22 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[0].id },
	{ title: "Fun place 3", content: "33 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[0].id },
	{ title: "Fun place 4", content: "44 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[0].id },
	{ title: "Fun place 5", content: "55 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[0].id },
	{ title: "Fun place 6", content: "66 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[2].id },
	{ title: "Fun place 7", content: "77 Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user_id: users[2].id },
]

Feedback.create(feedbacks)