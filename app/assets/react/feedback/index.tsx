import React, { FC } from 'react';
import { UIViewInjectedProps } from '@uirouter/react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { Button, Card } from 'react-bootstrap';
import get from 'lodash/get';
import ErrorBoundary from '../common/error';

import {
  currentUserIDState,
  currentUserFeedbackQuery,
  allUsersQuery,
} from './atoms';
import styles from './styles.module.scss';

type Props = {
  title: string;
  url: string;
};

const Page: FC<Props> = ({ title, url }) => {
  const feedbacks = useRecoilValue(currentUserFeedbackQuery);
  const users = useRecoilValue(allUsersQuery);
  const setUserId = useSetRecoilState(currentUserIDState);

  const UserBtn = (user: any) => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Button
        key={user.id}
        variant="outline-secondary"
        onClick={() => {
          console.log('user = ', user);
          setUserId(user.id);
        }}
      >
        {user.first_name} {user.last_name}
      </Button>
    </React.Suspense>
  );

  const FeedbackCard = (feedback: any) => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Card key={feedback.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{feedback.title}</Card.Title>
            <Card.Text>{feedback.content}</Card.Text>
          </Card.Body>
        </Card>
      </React.Suspense>
    );
  };

  return (
    <div>
      <h4>{title}</h4>
      <p className={styles.green}>URL: {url}</p>
      <div>{users.map(UserBtn)}</div>
      <div>{feedbacks.map(FeedbackCard)}</div>
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
