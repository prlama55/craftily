declare module '*.scss';
declare module '*.scss?inline';
declare module '*.css';

declare module '*.html';
declare module '*.css?inline' {
  const content: string;
  export default content;
}
