import React from 'react'

export default function Search() {
  return (
    <div>
     <div className="container p-5 my-20 w-50">
  <h3 className="p-4 text-center"><b>Get information about a crop by searching for it. </b></h3>
    <br /><br />

    <form method="POST" action="{{ url_for('fert_recommend') }}">
      <div className="mb-3">
        <label for="Crop_name" className="form-label"><b>Enter the name here.</b></label>
        <input type="text" className="form-control" id="Crop_name" name="crop_name" placeholder="Crop name" required />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
  </form>
</div>
    </div>
  )
}
