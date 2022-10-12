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


airlines = Airline.create([
{
    name: "United Airlines",
    image_url: "https://media.istockphoto.com/photos/united-airlines-planes-in-san-francisco-international-airport-picture-id510236842?k=20&m=510236842&s=612x612&w=0&h=LrFhwWgpzTTKlBnwj6t8oS4VW0-FVXtYmcq8onzLXIU="
},
{
    name: "Southern Airlines",
    image_url: "https://cdn.airplane-pictures.net/images/uploaded-images/2022/1/8/1439636as.jpg"
},
{
    name: "Delta",
    image_url: "https://images.unsplash.com/photo-1551522190-740b6000682f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbHRhJTIwYWlybGluZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    name: "JetBlue",
    image_url: "https://images.unsplash.com/photo-1576128343868-ba0ea33570a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV0Ymx1ZSUyMGFpcmxpbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    name: "American Airlines",
    image_url: "https://images.unsplash.com/photo-1545985548-25d056e14bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW4lMjBhaXJsaW5lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}
])

reviews = Review.create([
    {
        title: 'Good Review',
        description: 'I had a great experience with their services',
        score: 5,
        airline: airlines.first
    },
    {
        title: 'Bad Review',
        description: 'Their customer service is very poor',
        score: 1,
        airline: airlines.first
    }
])