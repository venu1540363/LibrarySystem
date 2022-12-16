import React from "react";
import './AddBooks.css'

function AddBooks () {
	return (
		<>
		<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h3>ADD USER</h3>
      <form id="addUser" action="">
        <div class="form-group">
          <input class="form-control" type="text" name="name" placeholder="Name" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" name="address" placeholder="Address" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="number" name="age" min="10" max="100" placeholder="Age" required />
        </div>
        <button class="btn btn-primary form-control" type="submit">SUBMIT</button>
      </form>
    </div>
    <div class="col-md-8">
      <h3>USERS</h3>
      <table id="userTable" class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th colspan="3">Age</th>
        </tr>
      </table>
    </div>
  </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Update User</h4>
      </div>
      <div class="modal-body"></div>
      <div class="modal-footer"></div>
    </div>
  </div>
</div>
		</>
	)
}

export default AddBooks