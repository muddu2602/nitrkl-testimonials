import React from "react";
import { Card } from 'antd';
import {Router , Link} from "@reach/router";

function PostSnippet(props){
    return(
        <div className="post_snippet_container">
            <Card 
                style={{ marginTop: 16 }} 
                type="inner" 
                title={props.title} 
                extra={<Link to={`/post/${props.id}`}>Read Testimonial</Link>} 
            >
                <p className="post-content">
                    {props.content}
                </p>
            </Card>
        </div>
    )
}

export default PostSnippet;