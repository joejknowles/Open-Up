require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Booking', js: true do
  scenario "should say today" do
    visit Urls::SLOTS
    expect(page).to have_content 'Today'
  end

  scenario "should say today's date" do
    visit Urls::SLOTS
    expect(page).to have_content date_today
  end
end

def date_today
  date = Date.today
  "#{date.day}/#{date.month}/#{date.year}"
end
