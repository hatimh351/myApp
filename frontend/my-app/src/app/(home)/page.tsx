'use client'

import {withAuth} from "@/app/_lib/withAuth"
import CreatePost from "./CreatePost";

const  Home = ()=> {
  return (
    <>
      <CreatePost> </CreatePost>
    </>
  );
}


export default withAuth(Home);
