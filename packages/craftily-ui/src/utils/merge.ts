import { twMerge } from 'tailwind-merge';

type ClassValue = string | number | boolean | null | undefined | ClassDictionary | ClassArray;
interface ClassDictionary {
  [id: string]: any;
}
interface ClassArray extends Array<ClassValue> {}

export const mergeClassNames = (...args: ClassValue[]): string => {
  console.log('args===========', args);
  const classNames: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classNames.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classNames.push(mergeClassNames(...arg));
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) classNames.push(key);
      });
    }
  });

  return twMerge(classNames.join(' '));
};
