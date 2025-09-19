
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './users';
import Friends from './friends';
import Posts from './post'
import Comments from './comments';
import Players from './players';

// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const fetchComments = async()=>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/comments')
  return res.json();
}


const fetchPosts = async()=>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())

const fetchFriends = async()=> {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
return res.json();
}


function App() {
  const friendPromise = fetchFriends();
  const postPromise = fetchPosts();
  const CommentsPromise = fetchComments();


  function handleClick(){
    alert('I am clicked')
  }
  function handleClick3(){
    alert('clicked 3')
  }

const handleAdd5 = (num)=> {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
  
      <h1>Vite + React</h1>

<Players></Players>
    <Suspense fallback= {<h4> Posts are coming......</h4>}>
    <Posts postPromise = {postPromise}></Posts>
    </Suspense>
    <Suspense fallback = {<h2>All comments are loading ....</h2>}>
      <Comments CommentsPromise = {CommentsPromise}></Comments>
    </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>
      <Suspense fallback = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback= {<h3>Friends are coming for treat...</h3>}>
  <Friends friendsPromise={friendPromise}></Friends>
</Suspense>


     
      <button onClick = {handleClick}>Click Me</button>
      <button onClick = {function handleClick2(){
        alert('clicked 2')
      }}>Click Me</button>
      <button onClick={handleClick3}>Click Me</button>
      <button onClick={()=> {
        alert('clicked 4')
      }}>Click Me 4</button>
      {/* <button onClick={handleAdd5(10)}>Click Me 5</button> */}

    </>
  )
}

export default App


