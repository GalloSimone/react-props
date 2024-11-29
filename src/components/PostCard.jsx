import image from "../assets/images.jpg";


function PostCard() {
    return (

        <div className="card " style={{ width: "30rem" }}>
            <img src={image} alt="Placeholder" className="card-img-top img-fluid" />

            <div>
                <h3 className="card-title px-3">titolo del post</h3>
            </div>
            <div>
                <p className="card-text px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime deleniti repellat error! Recusandae officia, deserunt earum soluta voluptatum sed rerum est totam sunt modi praesentium laboriosam illum unde cumque voluptas quos temporibus consequatur necessitatibus facere eos accusamus accusantium ex porro iste. Maxime nihil architecto, aliquam provident beatae maiores debitis.</p>
            </div>
            <div><button className="btn btn-danger my-3 mx-3">leggi di piu</button></div>
        </div>
    )

}

export default PostCard