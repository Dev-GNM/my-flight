# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
users = User.create([
    {
        first_name: "Luke",
        last_name: "Morio",
        email: "lukemorio@gmail.com",
        username: "MoriotheG",
        password_confirmation: "1234566"
    },
    {
        first_name: "Geoffrey",
        last_name: "Meru",
        email: "merugeoffrey@gmail.com",
        username: "GeoffMeru",
        password_confirmation: "1234567"
    }
])


myreviews = MyReview.create([
        {
            author: 'John',
            title: 'Good Review',
            description: 'I had a great experience with their services',
            score: 8
        },
        {
            author: 'James',
            title: 'Bad Review',
            description: 'Their customer service is very poor',
            score: 2
        }
])