interface INotification {
  title: string;
  content: string;
  date: string;
  link?: {
    url: string;
    label: string;
  };
  action?: {
    label: string;
    callback: () => void;
  };
}

interface Socials {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  email?: string;
  cell?: string;
  text?: string;
  url?: string;
}

interface SearchResult {
  id: string;
  name: string;
  title: string;
  socials: Socials;
  info: React.ReactNode;
}