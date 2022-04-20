class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]
    
    def index
        render json: User.all
    end 

    def show

        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end 

    def create
        user = User.create!(user_params)
        session[:current_user] = user.id

        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end 

    private 

    def user_params
        params.permit(:username, :password_digest)
    end 

end
