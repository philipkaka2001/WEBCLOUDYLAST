import "./Upload.css";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


function Upload() {
  // ('#datepicker').datetimepicker({
	// 	format: 'DD-MM-YYYY'
	// });
	
  return(
   
    <div className="container">
       <Navbar/>
      <form className="well form-horizontal" action="">
        <p>Upload Files</p>

        <div className="form-group">
          <label className="col-md-4 control-label">First Name</label>
          <div className="col-md-4 inputGroupContainer">
            <input name="first_name"  className="form=control" type="text"/>
          </div>
        </div>

            {/* LastName */}
        <div className="form-group">
          <label className="col-md-4 control-label">Last Name</label>
          <div className="col-md-4 inputGroupContainer">
            <input name="last_name"  className="form=control" type="text"/>
          </div>
        </div>
        

        <div className="form-group">
          <label className="col-md-4 control-label">Course</label>
          <div className="select-style">
          <select>
            <option value="javascript">K18</option>
            <option value="k18">K18</option>
            <option value="k19">K19</option>
            <option value="k20">K20</option>
            <option value="k21">K21</option>
            <option value="k22">K22</option>
          </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label">File Name</label>
          <div className="col-md-4 inputGroupContainer">
            <input name="last_name"  className="form=control" type="text"/>
          </div>
        </div>

        <div class="form-group green-border-focus">
          <label for="col-md-4 control-label">Title</label>
          <div className="title">
          <textarea className="form-control" id="exampleFormControlTextarea5" ></textarea>
          </div>
          
        </div>

        <div class="form-group pmd-textfield pmd-textfield-floating-label">
	        <label class="col-md-4 control-label" for="datepicker">Date Upload</label>
	        <input type="text" class="form-control" id="datepicker"/>
          
        </div>

        <div class="form-group">
            <label class="col-md-4 control-label" id="inputGroupFileAddon01">Upload</label>
          <div class="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"/>
          </div>
        </div>

        


        



      </form>
      <Footer/>
    </div>

  )
  
}

export default Upload;
