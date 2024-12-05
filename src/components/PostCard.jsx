import image from "../assets/images.jpg";
import posts from "../data/posts";
import TagList from "./tagList";
const tagList = [];
posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!tagList.includes(tag)) tagList.push(tag);
  });
});

function PostCard() {
    return (
        <main>
              <TagList tags={tagList} />
            <div className="container">
                {posts
                .filter((post)=>post.published)
               .map((post) =>(
                <div className="card" key={post.id}>
                <div className="img">
                  <img src={image} alt={post.title} />
                </div>
                <div className="description">
                  <h3>{post.title}</h3>
                  <div className="tags">
                    {post.tags.map((tag) => (
                      <span className={`tag-${tag}`} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="content">
                    <p>{post.content}</p>
                  </div>
                  <button id="button">
                    <p>LEGGI DI PIÙ</p>
                  </button>
                </div>
              </div>
               )
            )
                }
            </div>
        </main>
    )
  


}
export default PostCard