import React from 'react';
import Header from './Header';
import Card from './Card';
import projects from '../projects';
import Footer from "./Footer"
function App() {
  return (
    <div>
    
    <div className="container">
    <Header />
      <div className='row'>
        {projects.map(function(singleProject,i){
          return <Card 
          index = {i}
          key ={singleProject.id} 
          name = {singleProject.name}
          image = {singleProject.img}
             />
        })}
        
      </div>
      <Footer />
    </div>
    
    </div>
  );
}
export default App;
