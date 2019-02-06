class Post extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.post.message}</h1>
        <p>{this.props.post.created_at}</p>
      </div>
    )
  }
}
