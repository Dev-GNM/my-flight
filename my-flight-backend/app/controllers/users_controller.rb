class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    render json: User.all, status: :ok
  end

  # GET /users/1
  def show
    user = User.find_by(:id:params[:id])
    if user
    render json: user, status: :ok
    else
      render json: { error: "User not found"}, status: :not_found
    end
  end

  # POST /users
  def create
    user = User.create(user_params)

    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    user = User.find_by(id:params[:id])
    if user
    user.update(user_params)
      render json: user, status: :accepted
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  # DELETE /users/1
  def destroy
    user = User.find(id:params[:id])
    if user
    user.destroy
    head :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :username, :password_digest)
    end
end
