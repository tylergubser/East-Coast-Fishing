class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        user = User.find(params[:id])
        render json: user, status: :found
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created  
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end

    def user_params
        params.permit(:first_name, :last_name, :username)
      end

end
