require_relative 'urls.rb'

Rails.application.routes.draw do
  namespace :api do
    get '/slots', to: 'slots#show'
  end
  get '(*anything)', to: 'application#index'
end
