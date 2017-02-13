module Urls
  def self.book venuName = 'venue'
    "#{ venue(venuName) }/book"
  end

  def self.venue name
    "/#{name}"
  end
end
