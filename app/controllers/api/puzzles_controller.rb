class Api::PuzzlesController < ApplicationController
  before_action :require_signed_in

  def index
    case params[:query][:filter_by]
    when "user"
      puzzles = current_user.puzzles
    when "team"
      team = current_user
        .joined_teams
        .find_by_id(params[:query][:team_id])

      if team
        puzzles = team.puzzles
      else
        render json: ["Current user is not a member of this team"], status: 403
        return
      end
    else
      render json: ["Query params are wrong", params[:query]], status: 422
    end

    @puzzles = puzzles.where(solved: to_boolean(params[:query][:solved])).includes(:solvers)
  end

  def show
    @puzzle = Puzzle.find_by_id(params[:id])
    if current_user.joined_teams.find_by_id(@puzzle.team_id)
      render :show
    else
      render json: ["Current user is not a member of this team"], status: 403
    end
  end

  def create
    @puzzle = Puzzle.new(puzzle_params)
    if @puzzle.save
      render :show
    else
      render json: @puzzle.errors.full_messages, status: 422
    end
  end

  def update
    @puzzle = Puzzle.find_by_id(params[:id])
    if @puzzle.update_attributes(puzzle_params)
      render :show
    else
      render json: @puzzle.errors.full_messages, status: 422
    end
  end

  private

  def puzzle_params
    params.require(:puzzle).permit(:team_id, :title, :description, :solved)
  end
end
