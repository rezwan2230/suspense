import { ReactNode } from "react";

const layout = ({ children, posts, comments }: { children: ReactNode, posts: ReactNode, comments:ReactNode}) => {
  return <div>
    <h1>rezwan</h1>
    {children}
    {posts}
    {comments}
    </div>;
};

export default layout;
