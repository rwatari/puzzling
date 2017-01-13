class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @users = User.where("username ~ ?", params[:query])
    else
      @users = User.none
    end
  end
end
