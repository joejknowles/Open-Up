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
    scenario "display one button" do
      start_time = DateTime.now
      end_time = 1.hour.from_now
      Slot.create(start_time: start_time, end_time: end_time)
      visit Urls::SLOTS
      expect(page).to have_content("book #{format_time start_time} to #{format_time end_time}")
    end
  end
end

def format_time time
  time.strftime('%H:%M')
end

def date_today
  date = Date.today
  date.strftime('%-d/%-m/%Y')
end
