class User < ActiveRecord::Base
  has_many :postcards, dependent: :destroy
  has_many :feedbacks, dependent: :destroy
end
