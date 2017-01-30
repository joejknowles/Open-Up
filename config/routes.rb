require_relative 'urls.rb'

Rails.application.routes.draw do
  namespace :api do
    get '/slots', to: 'slots#show'
    post '/booking', to: 'bookings#create'
  end

  get '(*single_page_app)', to: 'application#index'
end
