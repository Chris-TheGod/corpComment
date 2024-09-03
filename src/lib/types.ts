export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

export type FeedbackItemProps = { feedbackItem: TFeedbackItem };
