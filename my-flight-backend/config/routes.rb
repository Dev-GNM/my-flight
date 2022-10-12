Rails.application.routes.draw do
  resources :reviews
  resources :airlines
  resources :users, only: [:index, :show, :create, :update, :destroy]
end
