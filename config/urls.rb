module Urls
  def self.book venueName = nil
    "#{ venue(venueName) }/book"
  end

  def self.venue name = nil
    "/#{name || 'venue'}"
  end
end
