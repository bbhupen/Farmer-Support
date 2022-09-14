import React from 'react'

export default function Fertilizer() {
  return (
    <div>
    <div className="container p-5 mx-20">
<h3 className="p-4"><b>Fill in the details below to predict the most suitable Fertilizer to use in your farm.</b> </h3>

<form method="POST" action="endpoint">
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
<label for="crop"><b>Crop you want to grow</b></label>
<select name="cropname" class="form-control fw-bold" id="crop" placeholder="Select a crop" required>

<option selected> Select crop</option>
        <option>rice</option>
        <option>maize</option>
        <option>chickpea</option>
        <option>kidneybeans</option>
        <option>pigeonpeas</option>
        <option>mothbeans</option>
        <option>mungbean</option>
        <option>blackgram</option>
        <option>lentil</option>
        <option>pomegranate</option>
        <option>banana</option>
        <option>mango</option>
        <option>grapes</option>
        <option>watermelon</option>
        <option>muskmelon</option>
        <option>apple</option>
        <option>orange</option>
        <option>papaya</option>
        <option>coconut</option>
        <option>cotton</option>
        <option>jute</option>
        <option>coffee</option>
      </select>
</div>

<button type="submit" class="btn btn-primary my-3" id="submitBtn"> Predict</button>
</form>

</div>

{/* <div className="mb-3">
      <label for="crop">Crop you want to grow</label
      >
      <select
        name="cropname"
        className="form-control"
        id="crop"
        placeholder="Select a crop"
        style="font-weight: bold"
        required
      >
        <option selected> Select crop</option>
        <option>rice</option>
        <option>maize</option>
        <option>chickpea</option>
        <option>kidneybeans</option>
        <option>pigeonpeas</option>
        <option>mothbeans</option>
        <option>mungbean</option>
        <option>blackgram</option>
        <option>lentil</option>
        <option>pomegranate</option>
        <option>banana</option>
        <option>mango</option>
        <option>grapes</option>
        <option>watermelon</option>
        <option>muskmelon</option>
        <option>apple</option>
        <option>orange</option>
        <option>papaya</option>
        <option>coconut</option>
        <option>cotton</option>
        <option>jute</option>
        <option>coffee</option>
      </select>
    </div>


<button type="submit" className="btn btn-primary my-3"> Predict</button>
</form> */}

{/* </div> */}
  </div>
  )
}
