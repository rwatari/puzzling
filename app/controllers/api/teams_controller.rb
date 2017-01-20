class Api::TeamsController < ApplicationController
  def index
    if signed_in?
      @teams = current_user.joined_teams.includes(:members, :admin)
    else
      @teams = []
    end
  end

  def show
    @team = current_user
      .joined_teams
      .includes(:members, :admin)
      .find_by_id(params[:id])
      
    if @team
      render :show
    else
      render json: ["Current user is not a member of this team"], status: 403
    end
  end

  def create
    @team = Team.new(team_params)
    @team.admin = current_user
    @team.members = [current_user]
    if @team.save
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :hunt_name)
  end
end
