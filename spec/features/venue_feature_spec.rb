require 'rails_helper'
require_relative '../../config/urls.rb'

feature 'venue page', js: true do
    scenario "should show venue name" do
      visit Urls::venue('venue')
      expect(page).to have_content 'Venue'
    end

    scenario "can got to book a slot" do
      visit Urls::venue('venue')
      click_link 'book here'
      expect(page).to have_content 'no slots available'
    end
end
