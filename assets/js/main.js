  $(".button-collapse").sideNav();


    $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  

  // $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrain_width: false, // Does not change width of dropdown to that of the activator
  //     hover: false, // Activate on hover
  //     gutter: 0, // Spacing from edge
  //     belowOrigin: false, // Displays dropdown below the button
  //     alignment: 'left' // Displays dropdown with edge aligned to the left of button
  //   }
  // );

    $(".drop").click(function (){
    	$(this).parent('li').children(".dropdown-menu").toggleClass('show');
    });
