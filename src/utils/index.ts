export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}