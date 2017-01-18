require_relative 'urls.rb'

Rails.application.routes.draw do
  get '(*anything)', to: 'application#index'
end
