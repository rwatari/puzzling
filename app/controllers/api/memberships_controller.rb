class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render json: {}, status: 200
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :team_id)
  end
end
