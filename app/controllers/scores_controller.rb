class ScoresController < ApplicationController
  
  def index
    @scores = Score.all
  end
  
  def new
    @score = Score.new
  end

  def create
    @score = Score.new(player_score)
  end
  
  def edit
  end
  
  def update
  end

  def destroy
  end
  
  private
  def player_score
    
  end


end
