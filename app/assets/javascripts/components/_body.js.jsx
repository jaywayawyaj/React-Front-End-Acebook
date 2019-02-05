// <script src="http://localhost:8097"></script>

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewPost = this.addNewPost.bind(this)
  }

  handleFormSubmit(message){
    let body = JSON.stringify({post: {message: message} })
    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((post) => {
      this.addNewPost(post)
    })

  }

  addNewPost(post){
    var posts = this.state.posts
    posts.unshift(post)
    this.setState({
      posts: posts
    })
  }

  // fetches data from the API and changes the state of the component
  componentDidMount(){
    fetch('/api/v1/posts.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ posts: data }) });
  }

  render(){
    return(
      <div>
      <NewPost handleFormSubmit={this.handleFormSubmit}/>
      <AllPosts posts={this.state.posts} />
      </div>
    )
  }
}
