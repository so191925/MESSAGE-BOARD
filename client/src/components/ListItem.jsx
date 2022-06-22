import React from 'react';
import {Card} from 'react-bootstrap'
import propTypes from 'prop-types' 


function ListItem({title, content}) {
        return (
            <Card>
            <Card.Body>
              <Card.Title>글 제목</Card.Title>
              <Card.Text>
                {content}축약 내용 ㅇㅇㅇㅇㅇㅇㅇㅇ
              </Card.Text>
            </Card.Body>
          </Card>
        )

}

ListItem.defaultProps ={
    title : '글제목',
    content : '글내용',
}

ListItem.propTypes ={
    title : propTypes.string,
    content : propTypes.string,
}
export default ListItem;