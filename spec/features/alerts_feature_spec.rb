require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Alerts on Day Booking page', js: true do
  context 'When double Booking' do
    let(:start_time) { DateTime.now }
    let(:end_time) { 1.hour.from_now }

    before do
      slot = Slot.create(start_time: start_time, end_time: end_time)
      visit Urls::book
      Booking.create(slot: slot)
      find('.BookButton').click
    end

    scenario "should show error message" do
      expect(page).to have_content 'Slot has already been taken'
    end

    scenario "error message should disappear on click" do
      find('.Alert').click
      expect(page).not_to have_content 'Slot has already been taken'
    end

    scenario "should update slots" do
      visit Urls::book
      expect(page).to have_content 'unavailable'
    end
  end

  context 'successful booking' do
    scenario 'displays booked notification' do
      slot = Slot.create(start_time: DateTime.now, end_time: 1.hour.from_now)
      visit Urls::book
      find('.BookButton').click
      expect(page).to have_content 'booked'
    end
  end
end
