import { atom, selector } from 'recoil';
import { FeedbackSvc } from '../common/services/feedback';
import { UserSvc } from '../common/services/user';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const allUsersQuery = selector({
  key: 'AllUsers',
  get: async () => {
    try {
      const inst = new UserSvc();
      const { data } = await inst.list();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const currentUserFeedbackQuery = selector({
  key: 'CurrentUserFeedback',
  get: async ({ get }) => {
    try {
      const inst = new FeedbackSvc();
      const { data } = await inst.list('/by_user', {
        user_id: get(currentUserIDState),
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
});