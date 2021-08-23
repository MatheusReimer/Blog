import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fas fa-pen"></i>
                        <i class="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Matheus Reimer</b></span>
                    <span className="singlePostDate">Date: 1 hour</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam dolorem ex obcaecati temporibus voluptas reiciendis, rem, aut facilis quo molestias ducimus non at adipisci debitis veniam modi perferendis atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolorum consequuntur consectetur cupiditate itaque laudantium architecto ipsa numquam vero tenetur et voluptatum, nam, deleniti nostrum? Molestiae blanditiis placeat provident voluptas?</p>
            </div>

        </div>

    )
}
