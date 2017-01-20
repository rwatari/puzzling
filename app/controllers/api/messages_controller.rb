class Api::MessagesController < ApplicationController
  before_action :require_signed_in

  def index
    team = current_user
      .joined_teams
      .find_by_id(params[:team_id])

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

  def update
    @message = current_user.posts.find_by_id(params[:id])
    unless @message
      render json: ["No post found by current user"], status: 403
      return
    end

    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = current_user.posts.find_by_id(params[:id])
    if @message
      @message.destroy!
      render :show
    else
      render json: ["No post found by current user"], status: 403
    end
  end

  private

  def message_params
    params.require(:message).permit(:team_id, :author_id, :title, :body)
  end
end
