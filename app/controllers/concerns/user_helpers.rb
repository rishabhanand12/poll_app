require 'jwt'

module UserHelpers
  extend ActiveSupport::Concern

  def generate_token(payload)
    # token = JWT.encode payload, ENV['jwt_secret'], 'HS256'
    JWT.encode payload, ENV['jwt_secret'], 'HS256'
  end

  def decode_token(token)
    # decoded_token = JWT.decode token, ENV['jwt_secret'], true, { algorithm: 'HS256' }
    JWT.decode token, ENV['jwt_secret'], true, { algorithm: 'HS256' }
  end

  def authenticate
    token = request.headers["authorization"].split(' ')[1]
    user = decode_token(token)
    if user.nil?
      render json: { error: 'Unauthorized' }, status: 401
    else
      params[:user_id] = user[0]["id"]
    end
  end
end
