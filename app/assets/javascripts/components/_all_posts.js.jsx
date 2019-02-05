const AllPosts = (props) => {

  var posts = props.posts.map((post) => {
      return(
        <div key={post.id}>
          <h1>{post.message}</h1>
          <h2>{post.created_at}</h2>
        </div>
      )
    })

  return(
        <div>
          {posts}
        </div>
      )

}
