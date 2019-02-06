const AllPosts = (props) => {

  var posts = props.posts.map((post) => {
    console.log(props)
    return(
      <div key={post.id}>
        <Post post={post}
        handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
    <div>
      {posts}
    </div>
  )
}
