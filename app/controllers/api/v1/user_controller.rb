# require_relative './concerns/user_helpers'

module Api
  module V1
    class UserController < ApplicationController
      include UserHelpers
      # before_action :authenticate, only: [:show_votes]

      def create
        user = User.new(name: params[:name],
                        email: params[:email],
                        password: params[:password],
                        password_confirmation: params[:password])
        payload_obj = { id: user.id, email: user.email }
        jwt_token = "Bearer #{generate_token(payload_obj)}"
        if user.save
          render json: { name: user.name, email: user.email, authorization: jwt_token }, status: 200
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end
    end
  end
end
