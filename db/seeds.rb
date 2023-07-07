# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."

puts "Deleting old data..."

Appointment.delete_all
Dentist.delete_all
ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence WHERE name = 'appointments'")
ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence WHERE name = 'dentists'")

u1 = User.create(name: 'Jaz', password: "password")
u2 = User.create(name: 'John', password: "password")
u3 = User.create(name:'Alex', password: "password")


d1 = Dentist.create(name: 'Dr. Ethan Smith', specialty: 'Endodontics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsABkA4ve8SrbZ_LX01AQrI7L5T246Vx3LLw&usqp=CAU')
d2 = Dentist.create(name: 'Dr. Abigail Taylor', specialty: 'Orthodontics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzXVE46gjgde1l8AW-lC9FXKIzaS24fXDhi26jcQZPVvTAs5c8NXH5X2Tjqvv2Qqht7s&usqp=CAU')
d3 = Dentist.create(name: 'Dr. Andrew Lewis', specialty: 'Dentures', image: 'https://d1k13df5m14swc.cloudfront.net/photos/Dr-Jason-Lin-DDS-MS-334778-circle_medium__v1__.png')
d4 = Dentist.create(name: 'Dr. Olivia Johnson', specialty: 'Periodontics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7rvBujaVGjn7uGa8DqNu9pUu03ACFGRY6F8OM480VrsqpNDLSY593WiUuIO_bymt_P8&usqp=CAU')
d5 = Dentist.create(name: 'Dr. Daniel Walker', specialty: 'Pediatric Dentistry', image: 'https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Byung-Kang-DDS-387751-circle_medium__v1__.png')
d6 = Dentist.create(name: 'Dr. James Foster', specialty: 'Oral Medicine', image: 'https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Duc-Huynh-DDS-106861-circle_medium.png')


puts "Seeding completed successfully 🌱"
