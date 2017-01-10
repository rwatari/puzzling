class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      log_in(@user)
      render :show
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: ["No user to logout"], status: 404
    end
  end
end
