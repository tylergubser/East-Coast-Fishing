class User < ApplicationRecord
    has_many :catches
    validates :username, presence: true, uniqueness: true

end
