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

  context "no slots" do
    scenario "display message: No slots available" do
      visit Urls::SLOTS
      expect(page).to have_content 'No slots available'
    end
  end

  context 'with one slot' do
    before do
      Slot.create(start_time: DateTime.now)
    end
    scenario "display one button" do
      visit Urls::SLOTS
      expect(page).to have_content("book #{ date_today }")
    end
  end
end

def date_today
  date = Date.today
  date.strftime('%-d/%-m/%Y')
end
