// TechDegree-Project3
// Junior Lam Tiang

//selects the name element by the id
var $nameElem = $("#name");

// selects the job role element
var $jobRole = $("#title");

// selects the other role option
var $otherRole = $("#other");

//focuses the name element so that when the page reloads name is in focus state
$nameElem.focus();

// checks initially if other option is selected
if ($jobRole.val() == "other"){
  // if selected show input
  $otherRole.attr("type", "text");
}else{
  $otherRole.attr("type", "hidden");
}

// keeps checking to see if other option has been selected
$jobRole.change(function(){
  if ($jobRole.val() == "other"){
    // if selected show input
    $otherRole.attr("type", "text");
  }else{
    $otherRole.attr("type", "hidden");
  }
});
