// Rover Object Goes Here
// ======================
var rover1 = {
  direction: ["N", "E", "S", "W"],
  position: [9][9],
  travelog: ["Position x: 4 Position y: 4"],
  contlog: 1,
  direct: 0,
  px: 4,
  py: 4,
  name: "rover1"
}
var rover2 = {
  direction: ["N", "E", "S", "W"],
  position: [9][9],
  travelog: ["Position x: 5 Position y: 7"],
  contlog: 1,
  direct: 0,
  px: 7,
  py: 4,
  name: "rover2"
}

var obstacle = {
  px: [5, 7, 8],
  py: [6, 3, 6]
}
// ======================
function turnLeft(rover){ 
  if (rover.direct === 0){
    rover.direct = 3; 
  } else rover.direct--; 
  console.log("turnLeft was called!");
  console.log("Rover is facing " + rover.direction[rover.direct]);
  rover.travelog[rover.contlog] = "{Rover is facing " + rover.direction[rover.direct] + "}";
  rover.contlog++;
}

function turnRight(rover){
  if (rover.direct === 3){
    rover.direct = 0; 
  } else rover.direct++; 
  console.log("turnRight was called!");
  console.log("Rover is facing " + rover.direction[rover.direct]);
  rover.travelog[rover.contlog] = "{Rover is facing " + rover.direction[rover.direct] + "}";
  rover.contlog++;
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelog[rover.contlog] = "{Fordward!";
  rover.contlog++;
  switch (rover.direction[rover.direct]) {
    case "N":
      if (rover.py != 0){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px && obstacle.py[i] == rover.py -1) {
            console.log("Obstacle!!");
            
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
          
        }
        if (((rover1.py-1) === rover2.py || rover2.py-1 === rover1.py) && rover1.px === rover2.px){
          console.log("so!");
          break;
        }
        rover.py --;
      }
        
      else
        console.log("wall");
      break;
    case "E":
      if (rover.px != 9){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i] === rover.px+1 && obstacle.py[i] == rover.py) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.px+1) === rover2.px || rover2.px+1 === rover1.px) && rover1.py === rover2.py){
          console.log("so!");
          break;
        }
        rover.px ++;
      }
      else
        console.log("wall");
      break;
    case "S":
      if (rover.py != 9){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px && obstacle.py[i] == rover.py +1) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.py+1) === rover2.py || rover2.py+1 === rover1.py) && rover1.px === rover2.px){
          console.log("so!");
          break;
        }
        rover.py ++;
      }
      else
        console.log("wall");
      break;
    case "W":
      if (rover.px != 0){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px -1 && obstacle.py[i] == rover.py) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.px-1) === rover2.px || rover2.px-1 === rover1.px) && rover1.py === rover2.py){
          console.log("so!");
          break;
        }
        rover.px --;
      }
      else
        console.log("wall");
      break;
    default:
      break;
  }
  
  console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);
  
  rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
  rover.contlog++;
}
function moveBackward(rover){
  console.log("moveBackwar was called");
  rover.travelog[rover.contlog] = "{Back!";
  rover.contlog++;
  switch (rover.direction[rover.direct]) {
    case "S":
      if (rover.py != 0){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px && obstacle.py[i] == rover.py -1) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.py-1) === rover2.py || rover2.py-1 === rover1.py) && rover1.px === rover2.px){
          console.log("so!");
          break;
        }
        rover.py --;
      }        
      else
        console.log("wall");
      break;
    case "W":
      if (rover.px != 9){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px +1 && obstacle.py[i] == rover.py) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.px+1) === rover2.px || rover2.px+1 === rover1.px) && rover1.py === rover2.py){
          console.log("so!");
          break;
        }
        rover.px ++;
      }
      else
        console.log("wall");
      break;
    case "N":
      if (rover.py != 9){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px && obstacle.py[i] == rover.py +1) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.py+1) === rover2.py || rover2.py+1 === rover1.py) && rover1.px === rover2.px){
          console.log("so!");
          break;
        }
        rover.py ++;
      }
      else
        console.log("wall");
      break;
    case "E":
      if (rover.px != 0){
        for (let i = 0; i < obstacle.px.length; i++) {
          if (obstacle.px[i]=== rover.px-1 && obstacle.py[i] == rover.py) {
            console.log("Obstacle!!");
            rover.travelog[rover.contlog] = "Obstacle!!";
            rover.contlog++;
            console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);  
            rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
            rover.contlog++;
            return;
          }
        }
        if (((rover1.px-1) === rover2.px || rover2.px-1 === rover1.px) && rover1.py === rover2.py){
          console.log("so!");
          break;
        }
        rover.px --;
      }
      else
        console.log("wall");
      break;
    default:
      break;
  }
  
  console.log("Posicion x: " + rover.px + " Posicion y: " + rover.py);
  
  rover.travelog[rover.contlog] = "Posicion x: " + rover.px + " Posicion y: " + rover.py + "}";
  rover.contlog++;
}
function commands(rover ,Winston) {
  for (let i = 0; i < Winston.length; i++) {
    switch (Winston[i]) {
      case "r":
        turnRight(rover);        
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;    
      default:
        console.log("ERROR: wrong command: \"" + Winston[i] +"\" .");
        break;
    }
    
  }
  
  console.log("\nRecord: " + rover.name + " \n");
  for (let i = 0; i < rover.travelog.length; i++) {
    console.log(rover.travelog[i]);
  }
}

