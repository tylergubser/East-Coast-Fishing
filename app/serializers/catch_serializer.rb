class CatchSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :weight, :location, :caption, :bait, :fishBreed, :user_id, :image

  def image
    url_for(self.object.photo)
  end 

end
