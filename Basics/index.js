//DOM Manipulation 

//Event Probagation
// Three phases
// 1.Event Capturing- Event trickles down from document to html to body to .. target
// 2.Target- triggering of event takes place
// 3.Event Bubbling- travels back up the Dom from target to ..to body to html to document

//adddeventlistener("click",function(),true);  true means we need event capturing and false means event bubbling
//e.stopPropagation(); - useful function to stop propagation 
//{once:true}; -fire off only once


//Event Delegation
//it allows users to append a single event listener to a parent that
//adds it to all of it s present and future descendants that match a selector. 

//adding event listener to parent and then using event.target to apply the neccessary changes to child elements
