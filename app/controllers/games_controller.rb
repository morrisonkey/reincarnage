class GamesController < ApplicationController
  def home
    @scores = Score.all.sort_by { |h| h[:total] }
  end

  def level1
  end

  def level2

  end

  def level3

  end

  def level4

  end
  
  def save
    if params[:total] != "NaN"
      Score.create({
        :player => params[:player],
        :level1 => params[:level1],
        :level2 => params[:level2],
        :level3 => params[:level3],
        :level4 => params[:level4],
        :total => params[:total]
        })
    end
  end
  
end
