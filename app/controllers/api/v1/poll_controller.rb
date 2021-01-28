# require_relative './concerns/user_helpers'


module Api
  module V1
    class PollController < ApplicationController
      include UserHelpers
      before_action :authenticate, only: %i[create register_vote show]

      def index
        polls = Poll.includes(:option).all
        data = []
        polls.each do |poll|
          data << { topic: poll.topic, id: poll.id, options: poll.show_options }
        end
        render json: { polls: data }, status: 200
      end
      
      def show
        data = []
        voted_option = ''
        votes = Vote.where(user_id: params[:user_id], poll_id: params[:id])
        if votes.empty?
          render json: { message: 'Vote to view votes breakdown' }, status: 422
        else
          votes = Vote.where(poll_id: params[:id]).includes(:option)
          votes.each do |vote|
            data << vote.option[:option]
            voted_option = vote.option[:option] unless vote.user_id != params[:user_id]
          end
          render json: { data: data.tally, voted_option: voted_option, vote_count: votes.count }, status: 200
        end
      end

      def create
        poll = Poll.create(topic: params[:topic], user_id: params[:user_id])
        options = Option.create([{ option: params[:optionA], poll_id: poll.id   },
                                 { option: params[:optionB], poll_id: poll.id   },
                                 { option: params[:optionC], poll_id: poll.id   },
                                 { option: params[:optionD], poll_id: poll.id   }])
        if poll && options
          render json: { message: 'Poll successfully created' }, status: 200
        else
          render json: { error: poll.errors.messages }, status: 422
        end
      end

      def register_vote
        vote = Vote.where({ poll_id: params[:poll_id], user_id: params[:user_id] })
        if !vote.empty?
          render json: { error: 'Already Voted' }, status: 500
        else
          vote = Vote.new(poll_id: params[:poll_id], option_id: params[:id], user_id: params[:user_id])
          if vote.save
            render json: { message: 'Vote registered' }, status: 200
          else
            render json: { error: vote.errors.messages }, status: 422
          end
        end
      end
    end
  end
end
