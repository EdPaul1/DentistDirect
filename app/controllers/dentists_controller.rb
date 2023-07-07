class DentistsController < ApplicationController
    
    # GET /dentists
    def index
      dentists = Dentist.all
      render json: dentists
    end
  
    def show
      dentist = Dentist.find(params[:id])
      render json: dentist
    end 
  
   
  end
  