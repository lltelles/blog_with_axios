import './NewPost.css'

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Insert new post</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input type="text"
          name="title"
          id="title"
          placeholder="Type the title" />
        </div>
        <div className="form-control">
          <label htmlFor="body">Content:</label>
          <textarea 
          name="body"
          id="body"
          placeholder="Type the content" ></textarea>
        </div>
        <input
         type="submit"
         value='Create Post'
         className="btn" />
      </form>
    </div>
  )
}

export default NewPost