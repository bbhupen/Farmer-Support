import React from 'react'

export default function Crop() {
  return (
    <div>
      <div className="container p-5 mx-20 ">
  <h3 className="p-4"><b>Fill in the details below to predict the most suitable crop to grow in your farm.</b> </h3>

<form method="POST" action="">
  <div className="">
    <label for="Nitrogen" className="form-label"><b>Nitrogen</b></label>
    <input type="number" className="form-control" id="Nitrogen" name="nitrogen" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="Phosphorous" className="form-label"><b>Phosphorous</b></label>
    <input type="number" className="form-control" id="Phosphorous" name="phosphorous" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="Pottasium" className="form-label"><b>Pottasium</b></label>
    <input type="number" className="form-control" id="Pottasium" name="pottasium" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="ph" className="form-label"><b>ph level</b></label>
    <input type="number" className="form-control" id="ph" name="ph" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="Rainfall" className="form-label"><b>Rainfall</b></label>
    <input type="number" className="form-control" id="ph" name="rainfall" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="Temperature" className="form-label"><b>Temperature</b></label>
    <input type="number" className="form-control" id="Temperature" name="temperature" placeholder="Enter the value" required />
  </div>

  <div className="mb-3">
    <label for="Humidity" className="form-label"><b>Humidity</b></label>
    <input type="number" className="form-control" id="Humidity" name="humidity" placeholder="Enter the value" required />
  </div>


  <button type="submit" className="btn btn-primary my-3"> Predict</button>
</form>

</div>
    </div>
  )
}
