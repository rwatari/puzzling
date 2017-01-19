class Api::MessagesController < ApplicationController
  before_action :require_signed_in

  def index
    team = current_user
      .joined_teams
      .where(id: params[:team_id])
      .first

    if team
      @messages = team.messages.includes(:author)
      render :index
    else
      render json: ["Current user is not a member of this team"], status: 403
    end
  end

  def show
    @message = Message.find_by_id(params[:id])
    if current_user.joined_teams.where(id: @message.team_id).empty?
      render json: ["Current user is not a member of this team"], status: 403
    else
      render :show
    end
  end

  def create
    @message = Message.new(message_params)
    @message.author = current_user
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:team_id, :author_id, :title, :body)
  end
end
