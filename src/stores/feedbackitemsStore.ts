import { create } from 'zustand';
import { TFeedbackItem } from '../lib/types';

export const useFeedbackItemsStore = create((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: '',
  selectedCompany: '',
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();

    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany
        )
      : state.feedbackItems;
  },
  addItemToList: async (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  fetchFeedbackItems: async () => {
    try {
      set(() => ({
        isLoading: true,
      }));

      const res = await fetch(
        'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
      );

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      set(() => ({
        feedbackItems: data.feedbacks,
      }));
    } catch (error) {
      set(() => ({
        errorMessage: 'Something went wrong. Please try again later.',
      }));
    }
    set(() => ({
      isLoading: false,
    }));
  },
}));
