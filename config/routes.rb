Rails.application.routes.draw do
  root 'root#index'
  # get 'pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'greetings/random'
  end
  
  get '/api/messages', to: 'root#greeting'
  # get '/api/messages', to: 'root#greeting'
  # # root 'pages#index'
  # resources :messages, only: [:index]
end
