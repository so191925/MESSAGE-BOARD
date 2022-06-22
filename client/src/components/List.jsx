import React from 'react';
import ListItem from './ListItem';
import axios from 'axios';

function List() {
    const handleOnClick = () => {
        axios.get('/list')
        .then((res) => console.log(res));
    }

    const makeListItems = () => {
        
        const data = [
            { title: '소영', content: '코드스테이츠'},
            { title: '소영', content: '코드스테이츠'},
            { title: '소영', content: '코드스테이츠'}
        ];
        return data.map((item, index) =><ListItem key={index} title={item.title} content={item.content}/>)
    }
    return (
        <>
        {makeListItems()}
        <button onClick={handleOnClick}>통신</button>
        </>
    )
}

export default List;