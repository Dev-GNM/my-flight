class MyReview < ApplicationRecord
    validates :description, length: { minimum: 10}
end
