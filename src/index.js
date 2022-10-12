import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail author="Sam" time="Today at 6:00PM" content="First comment" avatar={faker.image.avatar()}/>
      <CommentDetail author="Alex" time="Today at 9:30PM" content="My first blog post" avatar={faker.image.avatar()}/>
      <CommentDetail author="Jane" time="Today at 11:00PM" content="Waiting for a response" avatar={faker.image.avatar()}/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));