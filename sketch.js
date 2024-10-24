function preload() {
  noLoop()
}

let angles = [];
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  
  let numCols = windowWidth/100;
  let numRows = windowHeight/100;
  for (let i = 0; i < numCols * numRows; i++) {
    angles.push([random(TWO_PI), random(TWO_PI), random(TWO_PI)]);
    colors.push([random(255), random(255), random(255)]); 
  }
}

function draw() {
  background(220);
  let cols = 5;
  let rows = 5;
  let w = width / cols;
  let h = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(0);
      rect(i * w, j * h, w, h);

      let centerX = i * w + w / 2;
      let centerY = j * h + h / 2;

      for (let k = 0; k < 3; k++) {
        fill(colors[i + j * cols][k]);
        drawRotatingTriangle(centerX, centerY, w / 4, angles[i + j * cols][k]);
        angles[i + j * cols][k] += random(0.02, 0.05);
      }
    }
  }
}

function drawRotatingTriangle(x, y, size, angle) {
  push();
  translate(x, y);
  rotate(angle);
  stroke(0);
  triangle(-size / 2, size / 2, size / 2, size / 2, 0, -size / 2);
  pop();
}




//------------------------------------------------------------------

/*


let angles = [];

function setup() {
  createCanvas(400, 400);
  noFill();
  
  // Inicializa ângulos para cada triângulo em cada quadrado
  let numCols = 3;
  let numRows = 3;
  for (let i = 0; i < numCols * numRows; i++) {
    angles.push([random(TWO_PI), random(TWO_PI), random(TWO_PI)]);
  }
}

function draw() {
  background(220);
  let cols = 3;
  let rows = 3;
  let w = width / cols;
  let h = height / rows;

  // Desenhar a grade e triângulos girando
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(0);
      rect(i * w, j * h, w, h);

      // Posição central do quadrado
      let centerX = i * w + w / 2;
      let centerY = j * h + h / 2;

      // Desenhar os triângulos
      for (let k = 0; k < 3; k++) {
        drawRotatingTriangle(centerX, centerY, w / 4, angles[i + j * cols][k]);
        // Atualiza o ângulo com uma rotação aleatória
        angles[i + j * cols][k] += random(0.02, 0.05);
      }
    }
  }
}

function drawRotatingTriangle(x, y, size, angle) {
  push();
  translate(x, y);
  rotate(angle);
  stroke(0);
  triangle(-size / 2, size / 2, size / 2, size / 2, 0, -size / 2);
  pop();
}

//------------------------------------------------------------------
/*function draw() {
  background("black");
  fill("withe");

  for(let i = 0; i < width/100; i++) {
    for(let j = 0; j < height/100; j++) {
      square(i * 100, j * 100, 1000);
      triangle(i + 20, j + 20, i + 40, j + 40, i + 60, j + 60)
      //circle(i * 100 + 50, j * 100 + 50, random(25, 100));

    }
  }
}*/

//------------------------------------------------------------------

/*function drawCircle(a, b, size){
  let colori = ["green", "red", random(["gold", "blue"])]
  let coloriUsati = [];

  let x = random(a-20, a+20);
  let y = random(a-20, a+20);
  let x1 = random(a-20, a+20);
  let y1 = random(a-20, a+20);
  let x2 = random(a-20, a+20);
  let y2 = random(a-20, a+20);

  stroke("black");
  strokeWeight(3);
  fill("#000000")
  circle(a, b, size * 2);
  noStroke();
  blendMode(ADD);

  let colore1 = random(colori);
  coloriUsati.push(colore1);
  fill(colore1);
  circle(x, y, size);

  let colore2 = random(colori.filter(colore => colore !== colore1));
  coloriUsati.push(colore2);
  fill(colore2);
  circle(x2, y2, size);

  let colore3 = random(colori.filter(colore => colore !== colore2));
  coloriUsati.push(colore3);
  fill(colore3);
  circle(x3, y3, size);

}*/