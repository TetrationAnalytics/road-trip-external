import React, { FC, useState, useEffect } from 'react';
import { UIViewInjectedProps } from '@uirouter/react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import get from 'lodash/get';
import styles from './styles.module.scss';

type Props = {
  title: string;
  url: string;
};

const fetchData = async (url: string) => {
  const { data } = await axios.get(url);

  return data;
};

const Page: FC<Props> = ({ title, url }) => {
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchData('/api/users').then((data) => {
      setUsers(data);
    });
  }, []);

  const UserBtn = (user: any) => (
    <Button
      key={user.id}
      variant="outline-secondary"
      cy-tag="user-btn"
      onClick={async () => {
        const feedbacks = await fetchData(
          `/api/feedbacks/by_user?user_id=${user.id}`
        );
        setFeedbacks(feedbacks);
      }}
    >
      {user.first_name} {user.last_name}
    </Button>
  );

  const FeedbackCard = (feedback: any) => {
    return (
      <Card key={feedback.id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{feedback.title}</Card.Title>
          <Card.Text>{feedback.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <h4>{title}</h4>
      <p className={styles.green}>URL: {url}</p>
      <div id="users-wrap">{users.map(UserBtn)}</div>
      <div id="feedbacks-wrap">{feedbacks.map(FeedbackCard)}</div>
    </div>
  );
};

const App = ({ transition }: UIViewInjectedProps) => {
  const title = get(transition, 'router.stateService.current.data.pageTitle');
  const url = get(transition, 'router.stateService.current.url');
  return <Page title={title} url={url} />;
};

export default App;
