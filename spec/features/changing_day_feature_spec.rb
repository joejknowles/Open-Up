require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'booking by day', js: true do
  scenario 'can navigate to tomorrow' do
    visit Urls::book
    page.find('.next-day').click
    expect(page).to have_content 'Tomorrow'
  end

  scenario 'no previous day button when on today' do
    visit Urls::book
    expect(page).not_to have_css '.prev-day'
  end

  context "when there are slots tomorrow but none today" do
    before do
      slot = Slot.create(start_time: 1.day.from_now, end_time: 1.day.from_now + 1.hour)
      visit Urls::book
    end

    scenario 'shows no slots available today' do
      expect(page).to have_content /no slots/i
    end

    scenario 'shows slot after navigating to tomorrow' do
      page.find('.next-day').click
      expect(page).not_to have_content /no slots/i
    end
  end

  context "when there are slots today but none tomorrow" do
    before do
      slot = Slot.create(start_time: DateTime.now, end_time: DateTime.now + 1.hour)
      visit Urls::book
    end

    scenario 'shows slot available today' do
      expect(page).not_to have_content /no slots/i
    end

    scenario 'shows no slots after navigating to tomorrow' do
      page.find('.next-day').click
      expect(page).to have_content /no slots/i
    end

    scenario 'shows slot again after navigating to back to today' do
      page.find('.next-day').click
      page.find('.prev-day').click
      expect(page).to have_content 'book'
    end
  end
end
