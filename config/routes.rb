Rails.application.routes.draw do
  get 'pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace :api do
    get 'greetings/random'
  end

  root 'pages#index'
  resources :messages, only: [:index]
  # root 'home#index'
end
