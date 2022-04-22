class CatchesController < ApplicationController
    include Rails.application.routes.url_helpers

    def index
        catches = if params[:username]
                User.find_by(username: params[:username]).catches
            else
                Catch.all.with_attached_photo
            end
    
        render json: catches
      end

      #shows users catches on profile page
      def show
        catches = User.find(params[:id]).catches
        render json: catches.map { |catch|
          catch.as_json.merge({ image: url_for(catch.photo) })
        }      
    end


      def create
        user = User.find_by(username: params[:username])
        catch = Catch.create(catch_params)
        catch.user_id = user.id
        catch.name = user.first_name
        catch.save
        render json: catch, status: :created        
      end

      private

      def catch_params
        params.permit(:bait, :fishBreed, :weight, :caption, :location,  :user_id, :photo)
      end

end
