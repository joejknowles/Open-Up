require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Booking', js: true do
  scenario "should say today" do
    visit Urls::SLOTS

    expect(page).to have_content 'Today'
  end
end
