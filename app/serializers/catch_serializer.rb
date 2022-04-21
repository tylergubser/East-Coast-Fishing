class CatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :location, :caption, :bait, :fishBreed, :user_id
end
