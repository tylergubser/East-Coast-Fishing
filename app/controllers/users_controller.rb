class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :found
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username)
      end

end
