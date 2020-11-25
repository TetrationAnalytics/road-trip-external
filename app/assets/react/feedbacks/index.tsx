import React, { FC } from 'react';
import { UIViewInjectedProps } from '@uirouter/react';
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { Button, Card } from 'react-bootstrap';
import get from 'lodash/get';
import ErrorBoundary from '../common/error';

import {
  currentUserIDState,
  feedbacksQuery,
  usersQuery,
  useRefreshFeedbacks,
} from './atoms';
import styles from './styles.module.scss';

type Props = {
  title: string;
  url: string;
};

const Page: FC<Props> = ({ title, url }) => {
  const [userId, setUserId] = useRecoilState(currentUserIDState);
  const feedbacks = useRecoilValue(feedbacksQuery(userId));
  const refreshFeedbacks = useRefreshFeedbacks();
  const users = useRecoilValue(usersQuery);

  const UserBtn = (user: any) => (
    <Button
      key={user.id}
      variant="outline-secondary"
      cy-tag="user-btn"
      onClick={() => {
        setUserId(user.id);
        refreshFeedbacks();
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
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Page title={title} url={url} />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default App;
