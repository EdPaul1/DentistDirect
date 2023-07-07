class DentistSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :image

  has_many :appointments
end
