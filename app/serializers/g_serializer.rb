class GSerializer < ActiveModel::Serializer
  attributes :id, :resource, :Catch, :name, :weight, :location, :caption, :bait, :fishBreed, :photo
end
