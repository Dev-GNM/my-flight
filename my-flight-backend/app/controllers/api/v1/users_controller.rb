class UsersController < ApplicationController
    # before_action :set_user, only: %i[ show update destroy ]
    rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found
  
    # GET /users
    def index
      render json: User.all, status: :ok
    end
  
    # GET /users/1z
    def show
      set_user
      if user
      render json: user, status: :ok
      else
        render_user_not_found
      end
    end
  
    # POST /users
    def create
      user = User.create!(user_params)
  
      if user.valid?
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
      set_user
      if user
      user.update(user_params)
        render json: user, status: :accepted
      else
        render_user_not_found
      end
    end
  
    # DELETE /users/1
    def destroy
      set_user
      if user
      user.destroy
      head :no_content
      else
        render_user_not_found
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        user = User.find_by(id:params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def user_params
        params.permit(:first_name, :last_name, :email, :username, :password_confirmation)
      end
  
      def render_user_not_found
        render json: { error: "User not found" }, status: :not_found
      end
  end