Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, default: { format: :json } do
    resources :users, only: [:create] do
      get "search", on: :collection
    end
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:index, :show, :create]
    resources :memberships, only: [:create]
    resources :puzzles, only: [:index, :show, :create, :update]
    resources :solvings, only: [:create, :delete]
  end
end
