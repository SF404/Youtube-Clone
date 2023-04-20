import React from 'react'
export default function Videotile(props) {
    return (
        <div className="videoTile" id="videoTile">
            <a href={"https://www.youtube.com/watch?v=" + props.videoID}>
                <img src={"https://i.ytimg.com/vi/" + props.videoID + "/maxresdefault.jpg"} alt="Video Unavailable" className="thumbnail" id="thumbnail" />
            </a>
            <div className="videoInfo" id='videoInfo'>
                <img src="profileIcon.png" alt="" />
                <div className="information">
                    <h4 className='videoTitle'>Title</h4>
                    <p className='videoChannel'>Channel</p>
                    <p className='videoViewCount'>Views</p>
                </div>
            </div>
        </div>
    )
}
