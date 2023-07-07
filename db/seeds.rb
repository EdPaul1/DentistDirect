# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."

puts "Deleting old data..."

Appointment.destroy_all
Dentist.destroy_all


u1 = User.create(name: 'Jaz', password: "password")
u2 = User.create(name: 'John', password: "password")
u3 = User.create(name:'Alex', password: "password")


d1 = Dentist.create(name: 'Dr. Jazzy Jaz', specialty: 'Endodontics', image: 'https://perfectsmile.com.au/wp-content/uploads/2023/01/190A2989-scaled.webp')
d2 = Dentist.create(name: 'Dr. Emily', specialty: 'Orthodontics', image: 'https://cdn-jabob.nitrocdn.com/ThmVFroGPlLDlwmaLvYkldMabhBFjyWo/assets/images/optimized/rev-49f9604/wp-content/uploads/2021/04/2020-1003-1024x1024.jpg')
d3 = Dentist.create(name: 'Dr. Alex', specialty: 'Dentures', image: 'https://d1k13df5m14swc.cloudfront.net/photos/Dr-Jason-Lin-DDS-MS-334778-circle_medium__v1__.png')
d4 = Dentist.create(name: 'Dr. Ann', specialty: 'Periodontics', image: 'https://cdn-jabob.nitrocdn.com/ThmVFroGPlLDlwmaLvYkldMabhBFjyWo/assets/images/optimized/rev-49f9604/wp-content/uploads/2022/06/download-1-2.png')
d5 = Dentist.create(name: 'Dr. John', specialty: 'Pediatric Dentistry', image: 'https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Byung-Kang-DDS-387751-circle_medium__v1__.png')
d6 = Dentist.create(name: 'Dr. Nguyen', specialty: 'Oral Medicine', image: 'https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Duc-Huynh-DDS-106861-circle_medium.png')


puts "Seeding completed successfully 🌱"