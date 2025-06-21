export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

export type GitHubApiResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
};