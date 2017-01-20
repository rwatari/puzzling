class Api::ScheduleEventsController < ApplicationController
  def index
    team = current_user
      .joined_teams
      .find_by_id(params[:query][:team_id])

    if team
      case params[:query][:filter_by]
      when "past"
        @s_events = team
          .schedule_events
          .where("end_datetime <= ?", Time.current)
          .order(:start_datetime)
      when "future"
        @s_events = team
          .schedule_events
          .where("end_datetime >= ?", Time.current)
          .order(:start_datetime)
      end

      render :index
    else
      render json: ["Current user is not a member of this team"], status: 403
    end
  end

  def show
    @s_event = ScheduleEvent.find_by_id(params[:id])
    if current_user.joined_teams.find_by_id(@s_event.team_id)
      render :show
    else
      render json: ["Current user is not a member of this team"], status: 403
    end
  end

  def create
    @s_event = ScheduleEvent.new(s_event_params)
    if @s_event.save
      render :show
    else
      render json: @s_event.errors.full_messages, status: 422
    end
  end

  private

  def s_event_params
    params.require(:schedule_event).permit(
      :title,
      :description,
      :start_datetime,
      :end_datetime,
      :team_id
    )
  end
end
