import React, { Component } from 'react'
import {  Container, Table,   } from 'reactstrap';

import PostForm from './PostForm'

const url = 'https://jsonplaceholder.typicode.com/posts';
const getPostData = () => fetch(url)
  .then((res) => res.json())
  .then((json) => {
    return json
  })

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  };

  componentDidMount() {
    if(this.state.data.length ===0) {
      getPostData().then( (res) => {
        if(res) {
          console.log(res);
          this.setState({
            data: res
          })
        }
      });
      // debugger;
      console.log(this.state.data);
    }
  };

  render() {
    const { data } = this.state;
    return(
      <Container>
        <div className="Post">
          <PostForm/>

          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              
              { data.length !== 0 && (
                data.map( (post,key) => {
                  return (
                    <tr key={key}>
                      <th scope="row"> {post.id} </th>
                      <td> {post.userId} </td>
                      <td> {post.title} </td>
                      <td> {post.body} </td>
                    </tr>
                  )
                })
              )}              
            </tbody>
          </Table>
          { data.length === 0 && <p>Nothing in here!</p>}
        </div>
      </Container>
    )
  }
}

export default Post;