import React from 'react'

export default function FertilizerResult() {
  return (
    <div>
      <h3 className="text-center" style="margin: 4rem"> <b>The details on the type of fertilizer you should use are: </b></h3>
        <div className="container py-2 mx-auto h-10 " style="margin: 4rem;">
        
        <div className="row">
            <div className="col-sm py-2 py-md-3">
                <div className="card card-body" style="justify-content: center;">
                <p className="text-center" style="color: black; font-size: 26px; font-family: serif; ">{{ recommendation }}</p>
            </div>
        </div>
  </div>

</div>
    </div>
  )
}
