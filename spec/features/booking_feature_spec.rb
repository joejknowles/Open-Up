require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Booking', js: true do
  scenario "should say today" do
    visit Urls::SLOTS
    expect(page).to have_content 'Today'
  end

  scenario "should say today's date", js: true  do
    visit Urls::SLOTS
    expect(page).to have_content date_today
  end

  context "no slots" do
    scenario "display message: No slots available", js: true  do
      visit Urls::SLOTS
      expect(page).to have_content 'No slots available'
    end
  end

  context 'with one slot' do
    let(:start_time) { Time.new(1970, 10, 10, 9, 0, 0, '+00:00') }
    let(:end_time) { Time.new(1970, 10, 10, 10, 0, 0, '+00:00')}

    before do
      Slot.create(start_time: start_time, end_time: end_time)
    end
    scenario "display one button with single digit hour" do
      visit Urls::SLOTS
      expect(page).to have_content("book #{format_time start_time} to #{format_time end_time}")
    end

    scenario "display one button with double digit hour time" do
      visit Urls::SLOTS
      expect(page).to have_content("book #{format_time start_time} to #{format_time end_time}")
    end

    scenario "books slot when clicked" do
      visit Urls::SLOTS
      find(:css, '.BookButton').click
      visit Urls::SLOTS
      expect(page).to have_content("unavailable #{format_time start_time} to #{format_time end_time}")
    end
  end

  context 'with slot unavailable' do
    it 'displays unavailable slot' do
      start_time = Time.new(1970, 10, 10, 12, 0, 0, '+00:00')
      end_time = Time.new(1970, 10, 10, 13, 0, 0, '+00:00')
      slot = Slot.create(start_time: start_time, end_time: end_time)
      Booking.create(slot: slot)
      visit Urls::SLOTS
      expect(page).to have_content("unavailable from #{format_time start_time} to #{format_time end_time}")
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
