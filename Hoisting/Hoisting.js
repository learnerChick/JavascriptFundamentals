function foo(a) {
   a();
   function a() {
      console.log("yay");
   }
}


foo(); //yay -because function declaration gets hoisted.
foo( undefined ); //yay - because although undefined is passed in, function declaration trumps variable declaration
foo( function(){ console.log("bam"); } ); //yay - function declaration trumps function expression (remember the critetia for function declaration)
