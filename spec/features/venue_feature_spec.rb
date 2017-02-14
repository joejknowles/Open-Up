require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'venue page', js: true do
    scenario "should show venue name" do
      visit Urls::venue('venue')
      expect(page).to have_content /Venue/i
    end

    scenario "can got to book a slot" do
      visit Urls::venue('venue')
      find('.bookLink').click
      expect(page).to have_content 'No slots available'
    end
end
