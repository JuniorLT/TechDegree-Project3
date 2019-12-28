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
var $puns = $("#color .Puns");
//selects only the colors for JS Heart theme
var $heart = $("#color .Heart");

//variables that select each checkbox for each activity
var $main = $("#all");
var $frameWorks = $("#framework");
var $libs = $("#libs");
var $express = $("#express");
var $node = $("#node");
var $build = $("#build");
var $npm = $("#npm");

// variable that selects the paragraph element that will display total amount
var $totalAmount = $("#totalAmount");
// variable that will store total amount
var total = 0;

// variables that select each payment option
var $paymentOption = $("#payment");
var $credit = $("#credit-card");
var $payPal = $("#paypal");
var $bitCoin = $("#bitcoin");

// variables that hold the regex to test value with
var invalidName = (/^[\W]*$/);
var validEmail = (/^[^@]+@[^@.]+\.[a-z]+$/i)
var invalidCC = (/^[\d]{13,16}$/);
var invalidZip = (/^[\d]{5}$/);
var invalidCVV = (/^[\d]{3}$/);

// variable that selects the submit button
var $submit = $("button");

// function that will stop the submit if invalid information is spotted
$submit.on("click", function(event){
  // conditional that checks if name is valid
  if(invalidName.test($nameElem.val()) == true){
    event.preventDefault();
    // displays alert message saying name is invalid
    alert("Whoops: Invalid Name");

    // another conditional that checks if email is valid and formatted
  } else if (validEmail.test($("#mail").val()) == false){
    event.preventDefault();
    // displays alert message saying email is invalid
    alert("Whoops: Invalid Email");

    // another conditional that checks if you've selected an activity or not
    // checks the length(amount) of how many check boxes have been checked
    // if length(amount) is equal to 7 (number at which none of the activity boxes are checked)
    // (because apparently the options under colors for t-shirts count as checked)
    // then do the following...
  } else if ($(":checked").length === 7){
    event.preventDefault();
    // displays alert message saying that you haven't chosen an activity
    alert("Whoops: You need to select an Activity");

    // conditional that checks if credit card option has been selected
  } else if($paymentOption.val() == "credit card"){
    // nested conditional that checks when cc payment option is Selected
    // also checks if cc number is valid
      if(invalidCC.test($("#cc-num").val()) == false){
        event.preventDefault();
        // displays alert message saying invalid cc number
        alert("Whoops: Invalid Credit Card Number");

        // conditional that checks if zip code is valid
      }else if (invalidZip.test($("#zip").val()) == false){
        event.preventDefault();
        // displays alert message saying zip is invalid
        alert("Whoops: Invalid Zip Code");

        // conditional that checks if cvv is valid
      }else if (invalidCVV.test($("#cvv").val()) == false){
        event.preventDefault();
        // displays alert message saying cvv is invalid
        alert("Whoops: Invalid CVV");
      }
    }
});

// initially selects credit card
$paymentOption.val("credit card");

// initially hides everything until payment option is chosen
$payPal.hide();
$bitCoin.hide();

// function that checks if payment option has been selected
$paymentOption.change(function(){
  if ($paymentOption.val() == "paypal"){
    // if selected then show payPal info
    $payPal.show();
  }else{
    // if unselected then hide it
    $payPal.hide();
  }
});

// function that checks if payment option has been selected
$paymentOption.change(function(){
  if ($paymentOption.val() == "bitcoin"){
    $bitCoin.show();
  }else{
    $bitCoin.hide();
  }
});

// function that checks if payment option has been selected
$paymentOption.change(function(){
  if ($paymentOption.val() == "credit card"){
    $credit.show();
  }else{
    $credit.hide();
  }
});


// function that will check if main conference checkbox is checked
$main.change(function(){
  // once checked show total amount
  $totalAmount.show();
  // conditional that checks if it has been checked
  if ($main.prop("checked") == true){
    // add cost
    total = total + 200;
    console.log(total);
    // display cost
    $totalAmount.text("Total: $"+total);
  }else {
    // else condition that checks if unchecked
    // subtract cost
    total = total - 200;
    console.log(total);
    // display cost
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if build tools workshop has been checked and updates cost
$build.change(function(){
  $totalAmount.show();
  if ($build.prop("checked") == true){
    total = total + 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }else {
    total = total - 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if npm has been checked and updates cost
$npm.change(function(){
  $totalAmount.show();
  if ($npm.prop("checked") == true){
    total = total + 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }else {
    total = total - 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if js frameworks has been checked
// and disables conflicts while updating cost
$frameWorks.change(function(){
  $totalAmount.show();
  // if box has been checked then...
  if ($frameWorks.prop("checked") == true){
    // disables conflicting activity
    $express.attr("disabled", true);
    // color it grey so that it can be seen that it is disabled
    $("label.express").css("color", "grey");
    // add cost
    total = total + 100;
    console.log(total);
    // display cost
    $totalAmount.text("Total: $"+total);
  }else {
    // if unchecked then...
    // enable conflicting activity
    $express.attr("disabled", false);
    // color conflicting activity black showing that you can select now
    $("label.express").css("color", "black");
    // Subtract cost
    total = total - 100;
    console.log(total);
    // display cost
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if js frameworks has been checked
// and disables conflicts while updating cost
$express.change(function(){
  $totalAmount.show();
  if ($express.prop("checked") == true){
    $frameWorks.attr("disabled", true);
    $("label.framework").css("color", "grey");
    total = total + 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }else {
    $frameWorks.attr("disabled", false);
    $("label.framework").css("color", "black");
    total = total - 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if js frameworks has been checked
// and disables conflicts while updating cost
$libs.change(function(){
  $totalAmount.show();
  if ($libs.prop("checked") == true){
    $node.attr("disabled", true);
    $("label.node").css("color", "grey");
    total = total + 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }else {
    $node.attr("disabled", false);
    $("label.node").css("color", "black");
    total = total - 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }
});

// function that will check if js frameworks has been checked
// and disables conflicts while updating cost
$node.change(function(){
  $totalAmount.show();
  if ($node.prop("checked") == true){
    $libs.attr("disabled", true);
    $("label.libs").css("color", "grey");
    total = total + 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }else {
    $libs.attr("disabled", false);
    $("label.libs").css("color", "black");
    total = total - 100;
    console.log(total);
    $totalAmount.text("Total: $"+total);
  }
});





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
