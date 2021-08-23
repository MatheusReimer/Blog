import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategorie">News</span>
                    <span className="postCategorie">Programming</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ut iure doloribus ipsam assumenda tenetur quo inventore tempora aspernatur voluptates adipisci, officiis illum fugit esse ipsum maxime excepturi. Dolor, dolore.</p>
        </div>
    )
}
