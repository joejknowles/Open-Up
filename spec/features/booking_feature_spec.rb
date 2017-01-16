require 'rails_helper'
require_relative '../../config/urls.rb'


feature 'Booking' do
  scenario "should say today's date" do
    visit Urls::BOOK_SLOT
    expect(page).to have_content 'Today '
  end
end
