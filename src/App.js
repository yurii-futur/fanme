import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal'
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { name: 'Elon Mask', profile: 'elonmusk', description: 'Perfect forms with elegance, power and cutting edge technology.', time: '30m ago', id: Date.now(), locked: false },
    { name: 'Elon Mask', profile: 'elonmusk', description: 'Perfect forms with elegance, power and cutting edge technology.', time: '30m ago', id: Date.now(), locked: true }  
  ])

  const profiles = [
    {name: 'Alex Lundqvist', profile: 'alexlundqvist', default: true},
    {name: 'Alex Lundqvist', profile: 'alexlundqvist', default: false}
  ]
  const [post, setPost] = useState({ description: '' })
  const [visible, setVisible] = useState(false)

  const makeModalVisible = (state) => {
    console.log(state)
    setVisible(state);
  }

  const getDataForPost = (data) => {
    setPost({ ...post, description: data })
  }

  const createNewPost = () => {
    setPosts([...posts, { ...post, name: 'Elon Mask', profile: 'elonmusk', time: '30m ago', id: Date.now(), locked: false }])
    setPost({ ...post, description: '' })
    setVisible(false)
  }

  return (
    <div className="App">
      <Header />
      <div className="bg-gray-50">
        <Content profiles={profiles} setVisible={makeModalVisible} posts={posts} />
        <Modal description={post.description} setVisible={makeModalVisible} createNewPost={createNewPost} getDataForPost={getDataForPost} visible={visible} />
      </div>
    </div>
  );
}

export default App;
