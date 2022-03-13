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
