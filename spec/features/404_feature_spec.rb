require 'rails_helper'
require_relative '../../config/urls.rb'

feature '404 page', js: true do
    scenario "should say page not found" do
      visit '/notRealUrl'
      expect(page).to have_content 'Page not found'
    end

    scenario "links to existing page" do
      visit '/notRealUrl'
      click_link 'Home'
      expect(page).to have_content /Venue/i
    end
end
