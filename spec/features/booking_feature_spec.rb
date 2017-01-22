require 'rails_helper'
require_relative '../../config/urls.rb'
require_relative '../helpers/slots_helper.rb'

include SlotsHelper

feature 'Booking', js: true do
  scenario "should say today" do
    visit Urls::SLOTS
    expect(page).to have_content 'Today'
  end

  scenario "should say today's date" do
    visit Urls::SLOTS
    expect(page).to have_content date_today
  end

  context "no slots" do
    scenario "display message: No slots available" do
      visit Urls::SLOTS
      expect(page).to have_content 'No slots available'
    end
  end

  context "with one slot" do
    scenario "display one button" do
      add_slot
      visit Urls::SLOTS
      expect(find 'button').to exist
    end
  end
end

def date_today
  date = Date.today
  date.to_s
end
