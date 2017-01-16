require_relative 'urls.rb'

Rails.application.routes.draw do
  get Urls::SLOTS => "slots#index"
end
