import React from 'react'
import Card from './component/Card'
import data from './data'

const Body = () => {
  return (
    <>
      <div className="row">
        
          
          {data.map((item) => {
            return (
              <div className="col-lg-3 col-sm-6">
                <Card items={item} />
              </div>
            );
          })}
        
      </div>
    </>
  );
}

export default Body
