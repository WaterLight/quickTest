import React, {Component} from 'react'
import { Button, Form, FormGroup, Input  } from 'reactstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.postData = this.postData.bind(this);
  }
  //Post data

  postData() {
    var userId = document.getElementById('userId').value;
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => alert('success'))
    console.log('adding .....');
  }

  render() {
    return(
      <div className="PostForm my-3" >
        <Form>
          <h2>Posts</h2>

          <FormGroup className="d-flex mb-3">
            <Input className="w-25 mr-2" type="text" name="userId" id="userId" placeholder="userId" />

            <Input type="text" name="title" id="title" placeholder="title" />

          </FormGroup>
          <Input className="mb-2" type="text" name="body" id="body" placeholder="body" />
          
          <Button onClick={this.postData}>Add new post</Button>
        </Form>
      </div>
    )
  }
}

export default PostForm;