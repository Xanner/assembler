import React from 'react';
import { Comment } from 'antd';

export default function CommentView(props) {
    return (
        <Comment
            style={{ backgroundColor: 'white', fontFamily: 'Consolas', marginLeft: '50px' }}
            content={
                `> ${props.currentComment || ''}`
            }
        />
    );
}
