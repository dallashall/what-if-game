Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'api/questions', to: 'questions#create'
  post 'api/answers', to: 'answers#create'
  post 'api/teams', to: 'teams#create'
  post 'api/teams/:code', to: 'teams#start'
  get 'api/teams/:code', to: 'teams#join'
  post 'api/ordinal', to: 'ordinals#set_current_ordinal'
end
