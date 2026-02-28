export default function Form2(){
    return(
<div className="outerForms">
    <div className="innerForm2">
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Subject</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject "/>
    
  </div>
  <div style={{marginTop:"2rem"}} class="form-group">
    <label for="exampleInputPassword1">Complaint</label>
 
    <textarea style={{height:"10rem"}} placeholder="Describe your complaint" class="form-control" id="exampleInputPassword1" ></textarea>
  </div>
 
  <button style={{marginTop:"2rem"}} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
    )
}