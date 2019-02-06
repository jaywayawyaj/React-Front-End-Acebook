class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Post.all.order('updated_at DESC')
  end

  def create
    post = current_user.posts.build(post_params)
    post.save
    render json: post
  end

  # def create
  #   post = Post.create(post_params)
  #   render json: post
  # end

  def destroy
    Post.destroy(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:message)
  end

end
