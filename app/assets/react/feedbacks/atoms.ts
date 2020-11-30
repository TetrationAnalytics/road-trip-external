import { atom, selector, selectorFamily, useRecoilState } from 'recoil';
import { FeedbackSvc } from '../common/services/feedback';
import { UserSvc } from '../common/services/user';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 0,
});

const feedbacksQueryRequestIDState = atom({
  key: 'FeedbacksQueryRequestID',
  default: 0,
});

export const feedbacksQuery = selectorFamily({
  key: 'FeedbacksQuery',
  get: userID => async ({ get }) => {
    get(feedbacksQueryRequestIDState); // Add request ID as a dependency
    try {
      const inst = new FeedbackSvc();
      const { data } = await inst.list('/by_user', {
        user_id: userID,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const usersQuery = selector({
  key: 'UsersQuery',
  get: async () => {
    try {
      const inst = new UserSvc();
      const { data } = await inst.list();
      return data;
    } catch (error) {
      throw error;
    }
  }
});

export const useRefreshFeedbacks = () => {
  const [requestID, setRequestID] = useRecoilState(feedbacksQueryRequestIDState);

  return () => {
    setRequestID(requestID + 1);
  };
}