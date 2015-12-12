class TodosController < ApplicationController

  def index
    render :json => ToDo.all
  end

  def create
    @td = ToDo.create(todo_params)
	if @td.save
      render :json => @td
    else
      render :json => @td.errors, status: :unprocessable_entity
    end
  end

  def show
     render :json => ToDo.find(params[:id])
  end

  def update
    @td = ToDo.find(params[:id])
	@td.todo = params[:todo]
	if @td.save
      render :json => @td
    else
      render :json => @td.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    
	@td = ToDo.find(params[:id])
    if @td.destroy
      render :json => @td
    else
      render :json => {status: 'unprocessable_entity'}
    end
  
  end

  private
  def todo_params
    params.require(:toDo).permit(:todo)
  end

end













