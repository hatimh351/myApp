'use client'

import {withAuth} from "@/app/_lib/withAuth"


const  Home = ()=> {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}


export default withAuth(Home);
