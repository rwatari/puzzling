class Api::SolvingsController < ApplicationController
  def create
    solving = Solving.new(solving_params)
    if solving.save
      @puzzle = solving.puzzle
      render 'api/puzzles/show'
    else
      render json: solving.errors.full_messages, status: 422
    end
  end

  def destroy
    solving = current_user
      .solvings
      .find_by_puzzle_id(solving_params[:puzzle_id])
    @puzzle = solving.puzzle
    
    solving.destroy!
    render 'api/puzzles/show'
  end

  private

  def solving_params
    params.require(:solving).permit(:user_id, :puzzle_id)
  end
end
