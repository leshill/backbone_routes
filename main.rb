require 'sinatra'
require 'sinatra/content_for'
require 'slim'

enable :sessions

get '/' do
  locals = {patched_js: session[:patched_js]}
  session.delete(:patched_js)
  slim :index, locals: locals
end

get '/root_patched' do
  session[:patched_js] = true
  redirect '/'
end

get '/robots.txt' do
  halt 404
end

get '/favicon.ico' do
  halt 404
end

get '/:name' do
  slim params[:name].to_sym
end

get '/:name/*' do
  slim params[:name].to_sym
end
