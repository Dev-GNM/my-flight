class MyReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    #  before_action :authorize
        def index
           render json: MyReview.all,status: :ok
        end
        def show
            myreview= find_myreview
            render json: myreview, status: :ok
        end
         def update
            myreview = find_myreview
            MyReview.update!(myreview_params)
            render json: myreview
        end
        def create
            myreview= MyReview.create!(myreview_params)
            render json: myreview, status: :created
        end
        def destroy
            myreview = find_myreview
            myreview.destroy
            head :no_content
        end
        private
        def render_error
            render json: { error: "My Review not found" }, status: :not_found
         end
        def find_myreview
             MyReview.find(params[:id])
        end
        def myreview_params
            params.permit(:author, :title, :description, :score)
        end
        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
        def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end

end
