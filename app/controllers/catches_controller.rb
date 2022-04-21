class CatchesController < ApplicationController

    def index
        catches = Catch.all.with_attached_photo
    
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
        params.permit(:bait, :fishBreed, :weight, :caption, :location, :photo, :user_id)
      end

end
