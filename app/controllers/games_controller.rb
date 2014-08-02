class GamesController < ApplicationController
  def home
  end

  def level1
  end

  def level2
    @level_one_time = params[:id]
  end

  def level3
    @level_two_time = params[:id]
  end

  def level4
    @level_three_time = params[:id]
  end

  def scores
    @level_four_time = params[:id]
    @total_time = @level_one_time + @level_two_time + @level_three_time + @level_four_time
  end
  
end
