Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/questions/index', to: 'questions#index'
  post 'api/teams', to: 'teams#create'
end
