Rails.application.routes.draw do
  root to: 'main#index'
  get 'main_controller/index'

  namespace :api do
    resources :users, only: [:index]
    resources :visits, only: [:index]
    resources :attractions, only: [:index]
    resources :postcards, only: [:index, :show, :create] do
      collection do
        get :by_user
      end
    end
    resources :expenses, only: [:index]
    resources :feedbacks, only: [:index, :show, :create] do
      collection do
        get :by_user
      end
    end
  end
  # default fallback for angular
  # get '*path', to: redirect('/#/%{path}')

end
