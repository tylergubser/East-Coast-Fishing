# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


puts "Dropping users..."
User.destroy_all
puts "Dropping catches..."
Catch.destroy_all

bait = [
    "Nightcrawler",
    "Redworm",
    "Leech",
    "Minnow",
    "Worm",
    "Cricket",
    "Grasshopper",
    "Nymph",
    "Streamer",
    "Dry Fly"
]

fish_type = {
    "Sword_Fish" => "./photos/ezgif-5-9abe9ca33d.jpg",
    "Cod" => "./photos/ezgif-5-44f6873239.jpg",
    "Mackerel" => "./photos/spanish-mackerel_7.jpg",
    "Trout" => "./photos/fixeddsc01695_orig.jpg",
    "Salmon" => "./photos/fishing-01-f7ee115bbdf6d470.jpg",
    "Tuna" => "./photos/ezgif-5-03f6a70ff0.jpg",
    "Shark" => "./photos/ezgif-5-c7b57acf4f.jpg",
    "Red_Mullet" => "./photos/r0_55_2048_1261_w1200_h678_fmax.jpg",
    "Barramundi" => "./photos/ezgif-5-bfeca2dc21.jpg",
    "Bluefish" => "./photos/112608-bluefish-6.jpg",
    "Carp" => "./photos/1200x0.jpg",
    "Catfish" => "./photos/ezgif-5-ae15a4b3f1.jpg",
    "Pike" => "./photos/ezgif-5-21fa73ff00.jpg",
    "Crappie" => "./photos/ezgif-5-2705992ecb.jpg",
    "Largemouth Bass" => "./photos/0yn7sqg5wq11i9yzpwa5lqhxfsbh.jpg",
    "Minnow" => "./photos/792757_a48fef06b0594ed6b9d5bba09fbaf955_mv2_d_2337_2339_s_2.jpg",
    "Artic_Char" => "./photos/ArcticChar.jpg"
}

puts "Creating users..."
50.times do
    User.create(username: Faker::FunnyName.name, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name )
end

puts "Creating catches..."
200.times do
    fish = fish_type.to_a.sample
    Catch.create(bait: bait.sample, fishBreed: fish[0], name: User.order("RANDOM()").first.first_name, weight: Faker::Number.between(from: 1, to: 50), caption: Faker::Lorem.sentence, user_id: User.ids.sample, location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}").photo.attach(io: File.open(fish[1]), filename: "#{fish[0]}.jpg")
end


puts "Seeding done!"
