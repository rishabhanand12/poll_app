# require_relative './concerns/user_helpers'
module Api
  module V1
    class AuthController < ApplicationController
      include UserHelpers
      before_action :authenticate, only: %i[logged_in]
      
      def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
          payload_obj = { id: user.id, email: user.email }
          jwt_token = "Bearer #{generate_token(payload_obj)}"
          render json: { name: user.name, email: user.email, authorization: jwt_token }, status: 200
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      def logged_in
        if params[:user_id].nil?
          render json: { error: 'unauthorised' }, status: 401
        else
          render json: { message: 'authorised' }, status: 200
        end
      end
    end
  end
end

