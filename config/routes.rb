Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      post '/user', to: 'user#create'
      get '/auth', to: 'auth#logged_in'
      post '/auth', to: 'auth#login'
      get '/poll', to: 'poll#index'
      post '/poll', to: 'poll#create'
      get '/poll/:id', to: 'poll#show'
      get '/poll/:poll_id/:id', to: 'poll#register_vote'
      # get 'user/:id/votes', to: 'user#show_votes'
    end
  end

  get '*path', to: 'home#index', via: :all
end
