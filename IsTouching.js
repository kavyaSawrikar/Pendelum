function IsTouching(object1){
    if (object1.body.position.x - mouseX < 25
      && mouseX - object1.body.position.x < 25
      && object1.body.position.y - mouseY < 25
      && mouseY - object1.body.position.y < 25){
      
      return true;
    }
    else {
      return false;
    } 
  }
