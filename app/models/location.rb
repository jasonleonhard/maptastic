class Location < ApplicationRecord
  # maps and geolocate address string
  geocoded_by :address
  after_validation :geocode
end
