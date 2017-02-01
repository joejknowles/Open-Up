require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'booking by day' do
  scenario 'can navigate to tomorrow' do
    visit Urls::SLOTS
    find(css: '.next-day').click
    expect(page).to have_content 'Tomorrow'
  end

  context "when there are slots tomorrow but none today" do
    before do
      slot = Slot.create(start_time: 1.day.from_now, end_time: 1.day.from_now + 1.hour)
      visit Urls::SLOTS
    end
    
    scenario 'shows no slots available today' do
      expect(page).not_to have_content 'book'
    end

    scenario 'shows slot after navigating to tomorrow' do
      find(css: '.next-day').click
      expect(page).to have_content 'book'
    end
  end
end
