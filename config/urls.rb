module Urls
  def self.book
    "/book"
  end

  def self.venue name
    "/#{name}"
  end
end
