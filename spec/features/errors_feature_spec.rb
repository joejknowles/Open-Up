require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'Day Booking page', js: true do
  context 'When double Booking' do
    let(:start_time) { Time.new(1970, 10, 10, 9, 0, 0, '+00:00') }
    let(:end_time) { Time.new(1970, 10, 10, 10, 0, 0, '+00:00')}

    before do
      slot = Slot.create(start_time: start_time, end_time: end_time)
      visit Urls::SLOTS
      Booking.create(slot: slot)
      find(:css, '.BookButton').click
    end

    scenario "should show error message" do
      expect(page).to have_content 'Slot has already been taken'
    end

    scenario "error message should disappear on click" do
      find(:css, '.Alert').click
      expect(page).not_to have_content 'Slot has already been taken'
    end

    scenario "should update slots" do
      expect(page).to have_content 'unavailable'
    end
  end
end
