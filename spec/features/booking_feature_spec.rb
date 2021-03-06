require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Day Booking page', js: true do
  scenario "should say today" do
    visit Urls::book
    expect(page).to have_content 'Today'
  end

  scenario "should say today's date" do
    visit Urls::book
    expect(page).to have_content date_today
  end

  context "no slots" do
    scenario "display message: No slots available"  do
      visit Urls::book
      expect(page).to have_content 'No slots available'
    end
  end

  context 'with one slot' do
    let(:start_time) { DateTime.now }
    let(:end_time) { 1.hour.from_now }

    before do
      Slot.create(start_time: start_time, end_time: end_time)
    end

    scenario "display one button with single digit hour" do
      visit Urls::book
      expect(page).to have_content("book #{format_time start_time} to #{format_time end_time}")
    end

    scenario "display one button with double digit hour time" do
      visit Urls::book
      expect(page).to have_content("book #{format_time start_time} to #{format_time end_time}")
    end

    scenario "books slot when clicked" do
      visit Urls::book
      find('.BookButton').click
      visit Urls::book
      expect(page).to have_content("unavailable #{format_time start_time} to #{format_time end_time}")
    end

    scenario "returns to venue after booking" do
      visit Urls::book
      find('.BookButton').click
      expect(page).to have_current_path(Urls::venue, only_path: true)
    end
  end

  context 'with slot unavailable' do
    it 'displays unavailable slot' do
      start_time = DateTime.now
      end_time = 1.hour.from_now
      slot = Slot.create(start_time: start_time, end_time: end_time)
      Booking.create(slot: slot)
      visit Urls::book
      expect(page).to have_content("unavailable #{format_time start_time} to #{format_time end_time}")
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
