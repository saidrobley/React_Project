import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments" style={{ marginTop: '20px' }}>
      <ApprovalCard>
        <CommentDetail
          autho="Sam"
          timeAgo="Today at 3:00PM"
          blogPost="Nice post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          autho="Joe"
          timeAgo="Today at 5:00PM"
          blogPost="Good job mate"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          autho="Tom"
          timeAgo="Yesterday at 6:00PM"
          blogPost="I like what you did there"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
