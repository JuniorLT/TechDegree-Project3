// TechDegree-Project3
// Junior Lam Tiang

//selects the name element by the id
var $nameElem = $("#name");

// selects the job role field
var $jobRole = $("#title");

// selects the other role option
var $otherRole = $("#other");

//selects the theme field
var $theme = $("#design");

//selects the colors element
var $colors = $("#color");

//selects only the colors for JS puns theme
var $puns = $("#color .Puns")

//selects only the colors for JS Heart theme
var $heart = $("#color .Heart")

// initially hides the colors
$colors.hide();

//checks to see if theme has been selected
$theme.change(function(){
  // if js pun theme is selected
  if ($theme.val() == "js puns"){
    // auto select cornflower blue
    $colors.val("cornflowerblue");
    // show colors
    $colors.show();
    //show only pun colors
    $puns.show();
    // hide heart colors
    $heart.hide();

    // if heart theme is selected
  }else if ($theme.val() == "heart js"){
    // auto select the tomato color
    $colors.val("tomato");
    // show colors
    $colors.show();
    // show only the heart colors
    $heart.show();
    // hide the pun colors
    $puns.hide();

    // if no theme is selected then hide colors again
  }else{
    // hides the colors
    $colors.hide();
  }
});

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

//focuses the name element so that when the page reloads name is in focus state
$nameElem.focus();
