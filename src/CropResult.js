import React from 'react'

export default function CropResult() {
  return (
    <div>
        <div className="container py-2 mx-auto my-20 h-10 border-10" style="margin: 4rem;">
  <div className="row">
      <div className="col-sm py-2 py-md-3">
          <div className="card card-body" style="justify-content: center;">
               <h1 className="text-center" style="color: black; font-size: 45px; font-family: serif "><b>Crop Predicted: <i>{{ prediction }}</i></b></h1>
               <h1 className="text-center" style="color: black; font-size: 45px; font-family: serif ">So, grow <i>{{ prediction }} </i> in your farm.</h1>
               <br></br>
               <img src="" className="img-fluid" alt="Image" />
          </div>
      </div>
  </div>
</div>
      
    </div>
  )
}
