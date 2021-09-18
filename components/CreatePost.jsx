import React , {useState , useEffect} from 'react';
import {PageHeader , Input , Button} from 'antd';
import db from '../firebase';


const { TextArea } = Input;
function CreatePost(props) {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value);
    }


    const onCreatePost = () => {

        let postRef = db.collection('posts')
        let payload = { title ,content }
       
        postRef.add(payload)
        .then(function(docRef) {
           // console.log("Document saved sucessfully" , docRef.id);
        })

    }


    return(
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                        className="site-page-header"
                        title="Create Post"
                        subTitle=""
                    />
           </div>

            <div className="post-inputs-container">
                <div className="post-input-container">
                    <div className="post-input-title">
                        <h2>Post Input</h2>
                    </div>

                    <div className="post-input">
                        <Input placeholder="Post Title" value={title} onChange={onTitleChange}/>
                    </div>

                </div>

                <div className="post-input-container">
                    <div className="post-input-title">
                        <h2>Post Input</h2>
                    </div>

                    <div className="post-input">
                        <TextArea rows={10} onChange={onContentChange} placeholder="Enter your Testimonial"/>
                    </div>

                </div>


                <div className="post-input-button">
                    <Button type="primary" size="large" onClick={onCreatePost}>Submit</Button>
                </div>


            </div>


        </div>
        
    )
}


export default CreatePost;