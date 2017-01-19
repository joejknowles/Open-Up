require_relative 'urls.rb'

Rails.application.routes.draw do
  get '/api/slots', to: 'slots#show'
  get '(*anything)', to: 'application#index'
end
