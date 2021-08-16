import React from 'react';
import "./style.css"

function Loding()
{
   return(
       <div className="lodingDiv">
           <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
       </div>
   )

}
export default Loding;