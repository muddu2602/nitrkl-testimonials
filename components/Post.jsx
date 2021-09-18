import React ,{useState , useEffect} from "react";
import { PageHeader, Card} from 'antd';
import api from '../mock-api';

function Post(props){
    const [title , setTitle] = useState('');
    const [content , setContent] = useState('');

    useEffect( ()=>{
        let post = api[props.id]  
        setTitle(post.title);
        setContent(post.content);
    } , [])

    return(
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                        className="site-page-header"
                        title={title}
                        subTitle=""
                    />
           </div>

           <div className="post_content_container">
           <Card style={{marginTop:'20px'}}>
                {
                    content.split('\n').map((item , id) =>{
                        return <p key={id}> {item} </p>;
                    })
                }
            </Card>
        </div>
        </div>
    )
}


export default Post;