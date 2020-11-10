Rails.application.routes.draw do
  root to: 'main#index'
  get 'main_controller/index'

  namespace :api do
    resources :users, only: [:index]
    resources :visits, only: [:index]
    resources :attractions, only: [:index]
    resources :postcards, only: [:index, :create]
    resources :expenses, only: [:index]
  end
  # default fallback for angular
  # get '*path', to: redirect('/#/%{path}')

end
