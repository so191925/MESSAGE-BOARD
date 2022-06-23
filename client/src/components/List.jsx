import React, {useState, useEffect} from 'react';
import ListItem from './ListItem';
import axios from 'axios';
import PageList from './PageList';

function List() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const makeListItems = (data = []) => {
        return data.map((item, index) =><ListItem key={index} title={item.title} content={item.content}/>)
    }
    useEffect(() =>{
        axios.get(`api/list/?page=${page}`)
        .then((res) => setData(res.data));
    }, [page]);

    return (
        <>
        {makeListItems(data)}
        <PageList page={page} setPage={setPage}/>
        </>
    )
}

export default List;