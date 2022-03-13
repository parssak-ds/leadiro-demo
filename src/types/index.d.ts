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

interface ISocials {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  email?: string;
  cell?: string;
  text?: string;
  url?: string;
}

interface ISearchResult {
  id: string;
  name: string;
  title: string;
  socials: ISocials;
  info: React.ReactNode;
}

interface IDataProfileOption {
  checked: boolean;
  title: string;
  progress: number;
  count: number;
}
