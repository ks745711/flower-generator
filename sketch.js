function setup() {
  gui = new Gui();
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'show_introduction').onChange(introduction);
  gui_setup.add(gui, "flower_petals", 3, 50, 1);
  gui_setup.add(gui, "flower_shape", 2, 250, 1);
  gui_setup.add(gui, "flower_redness", 0, 255);
  gui_setup.add(gui, "flower_greenness", 0, 255);
  gui_setup.add(gui, "flower_blueness", 0, 255);
  gui_setup.add(gui, "flower_transparency", 0, 255);
  gui_setup.add(gui, "text");
  gui_setup.add(gui, "text_size", 1, 600);
  gui_setup.addColor(gui, "text_color");
  gui_setup.addColor(gui, "bg_color");
  
  var save_button = {
        download_png: function () {
            save("flower-power.png"); // give file name
            print("saved png image");
            noLoop(); // we just want to export once
        }
    };

    gui_setup.add(save_button, 'download_png');
  
  intro = select('.div-block');
  intro.position(0, 0);



  createCanvas(windowWidth, windowHeight);






  noStroke();
}

function flower(petals, x, y) {
  fill(gui.flower_redness, gui.flower_greenness, gui.flower_blueness, gui.flower_transparency);

  push();
  translate(x, y);
  for (var i = 0; i < petals; i++) {
    ellipse(0, 30, gui.flower_shape, 80);
    rotate(PI / (petals / 2));
  }
  pop();
}

function draw() {
  background(gui.bg_color);

  for (var x = windowWidth / 6; x <= windowWidth * 5 / 6; x += windowWidth / 6) {

    for (var y = windowHeight / 5; y <= windowHeight * 4 / 5; y += windowHeight / 5) {

      flower(gui.flower_petals, x, y);
    }
  }

  fill(gui.text_color);
  noStroke();
  textSize(gui.text_size);
  textAlign(CENTER);
  textFont("Amatic SC");
  text(gui.text, windowWidth / 2, windowHeight / 2 + gui.text_size / 3);

}

function Gui() {
  this.flower_petals = 7;
  this.flower_shape = 40;
  this.bg_color = "#166e96";
  this.text = "FLOWER POWER"
  this.flower_redness = 255;
  this.flower_greenness = 255;
  this.flower_blueness = 255;
  this.flower_transparency = 20;
  this.text_color = "#ebba1b";
  this.text_size = 250;
  this.show_introduction = true;
}

function introduction() {
  if (gui.show_introduction) {
    intro.style('display', 'block');
    }
    else {
      intro.style('display', 'none');

      }
    }


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    saveCanvas('flower-power.png', 'png');
    print("saved png image");
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}