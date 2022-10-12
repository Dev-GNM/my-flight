module Api
    module V1
        class ReviewsController < ApplicationController
            def index
                airlines = Airline.all 
            end
        end
    end
    end