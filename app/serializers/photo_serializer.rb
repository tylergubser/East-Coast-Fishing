class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :data, :filename, :mime_type, :user_id, :catch_id
end
