<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>
</head>
<body>
<div><p>All Stages,Subjects,Topics & Sub-topics
</p></div>

<button type="button" class="collapsible">Hierarchy View</button>
<div class="content">
  <p> All stages/Priliminary</p>
  <b>Priliminary<b>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> Locked Subject Time</label><br>
  <select name="cars" id="cars">
    <option value="volvo">Exam Category</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <select name="cars" id="cars">
    <option value="volvo">Exam name</option>
    <option value="saab">1</option>
    <option value="opel">2</option>
    <option value="audi">3</option>
  </select>
  <select name="cars" id="cars">
    <option value="volvo">Year</option>
    <option value="saab">1</option>
    <option value="opel">2</option>
    <option value="audi">3</option>
  </select>
  <input type="date" id="birthday" name="birthday">
  <input type="text" id="lname" name="lastname" placeholder="Vacancy">
  <input type="text" id="lname" name="lastname" placeholder="Minimum Age">
  <input type="text" id="lname" name="lastname" placeholder="Maximum Age">
  <select name="cars" id="cars">
    <option value="volvo">Qualification</option>
    <option value="saab">1</option>
    <option value="opel">2</option>
    <option value="audi">3</option>
  </select>
 
  <input type="text" id="lname" name="lastname" placeholder="Last Years cutoff">
  <input type="text" id="lname" name="lastname" placeholder="Sallary">
  <br>
  <textarea name="message" rows="10" cols="30">Rich text box.</textarea>
  <br>
  <div>
  <h2>Subjects </h2>
  <p>English,&#8364;Remove,&#x20AC; Copy structer form </p>

  </div>
  <input type="submit" value="Add New Subject" style="background-color:red"><br><br>
  </article>
</section>
</div>



<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>

</body>
</html>
