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
    if params[:query][:string].present?
      team_membership_ids = Membership
        .where(team_id: params[:query][:team_id])
        .pluck(:user_id)
      @users = User
        .where.not(id: team_membership_ids)
        .where("username ~ ?", params[:query][:string])
    else
      @users = User.none
    end
  end
end
