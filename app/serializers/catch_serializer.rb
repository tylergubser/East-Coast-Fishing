class CatchSerializer < ActiveModel::Serializer
  attributes :id, :bait, :fish_type, :fish_weight, :user_id
end
