import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

const commentsData = [
    {
        name: "Muzamil Hussain",
        text: "Hello muzamil how are you",
        replies: [],
    },
    {
        name: "zakir malik",
        text: "Hello muzamil how are you",
        replies: [
            {
                name: "Akshay Saini",
                text: "Hello akshay saini how are you",
                replies: [],
            },
            {
                name: "Sabit Ali",
                text: "Hello sabit how are you",
                replies: [
                    {
                        name: "Ziyad Yousuf",
                        text: "Hello ziyad how are you",
                        replies: [
                            {
                                name: "Usmai tariq",
                                text: "hello usman how are you",
                                replies: [
                                    {
                                        name: "Akshay saini",
                                        text: "hello akshay how are you",
                                        replies: [
                                            {
                                                name: "muzamil hussain",
                                                text: "hello again muzamil how are you",
                                                replies: [],
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
    },
    {
        name: "Muzamil Hussain",
        text: "Hello muzamil how are you",
        replies: [],
    },
    {
        name: "Muzamil Hussain",
        text: "Hello muzamil how are you",
        replies: [],
    },
    {
        name: "Muzamil Hussain",
        text: "Hello muzamil how are you",
        replies: [],
    },
   
    
]


const Comment = ({ data }) => {
    console.log(data)
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-200 p-2 my-2 rounded-lg w-[50rem]">
            <FaUserCircle className='mt-1 w-8 h-10 mx-1' />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {

    //console.log(comments)
    //do not use index as keys
    return comments.map((comment, index) => (<div>
        <Comment key={index} data={comment} />
        <div className='pl-3 border border-l-black'>
       <CommentsList comments={comment.replies}/>
        </div>
    </div>
    )
    )

}


const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer