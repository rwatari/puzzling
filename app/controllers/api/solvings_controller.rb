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
  end

  private

  def solving_params
    params.require(:solving).permit(:user_id, :puzzle_id)
  end
end
