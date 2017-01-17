class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  private

  def require_signed_in
    unless signed_in?
      render json: ["You are not signed in"], status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def to_boolean(str)
    str == "true"
  end
end
