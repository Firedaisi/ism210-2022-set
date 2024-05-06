import React from 'react';
import HelloWorld from './component/HelloWorld';
import HelloWorld2 from './component/HelloWorld2';
const App: React.FC = () => {
    return (<>
      <div className="bg-purple-200 h-56 flex justify-center items-center">
        <HelloWorld />
      </div>

     <div className="bg-blue-200 h-56 flex justify-center items-center">
     <HelloWorld2 name = "Ope" />
   </div> </>
    );
  }
  export default App;3


