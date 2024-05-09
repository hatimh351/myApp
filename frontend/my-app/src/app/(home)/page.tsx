'use client'

import {WithAuth} from "@/app/_lib/withAuth"


const  Home = ()=> {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}


export default WithAuth(Home);