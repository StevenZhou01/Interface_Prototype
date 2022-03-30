let chr01 = {
  character: "巴",
  strokes: [
    "M 657 508 Q 696 634 739 664 Q 758 686 741 708 Q 720 724 658 753 Q 636 762 610 752 Q 489 695 295 659 C 266 653 277 611 306 620 Q 396 647 425 652 L 471 664 Q 523 679 581 693 Q 612 703 626 691 Q 639 678 634 651 Q 616 572 594 509 C 584 481 648 479 657 508 Z",
    "M 425 652 Q 426 640 422 465 C 421 435 468 447 472 477 Q 485 585 492 613 Q 504 640 472 663 L 471 664 C 448 683 424 682 425 652 Z",
    "M 273 411 Q 291 398 314 404 Q 428 435 675 469 Q 687 470 688 481 Q 688 490 657 508 L 594 509 Q 530 493 472 477 L 422 465 Q 343 450 276 439 Q 273 439 274 438 C 245 432 247 425 273 411 Z",
    "M 929 157 Q 905 224 890 337 Q 887 356 878 362 Q 868 369 864 343 Q 851 201 831 176 Q 774 113 538 115 Q 409 121 355 144 Q 307 169 297 202 Q 276 253 272 387 Q 272 400 273 411 L 274 438 Q 280 549 301 605 Q 304 612 306 620 C 314 645 314 645 295 659 Q 294 660 292 662 Q 229 708 211 703 Q 192 696 202 675 Q 227 629 222 560 Q 218 232 249 167 Q 286 80 446 59 Q 548 46 707 56 Q 851 66 907 97 Q 946 118 929 157 Z",
  ],
};

let chr02 = {
  character: "山",
  strokes: [
    "M 536 209 Q 546 407 552 587 Q 556 633 562 664 Q 569 691 574 710 Q 578 723 554 740 Q 512 762 484 767 Q 465 771 456 760 Q 447 751 457 734 Q 488 688 489 655 Q 499 444 488 200 C 487 170 534 179 536 209 Z",
    "M 796 244 Q 657 232 536 209 L 488 200 Q 379 182 284 155 Q 256 148 263 180 Q 267 253 272 329 Q 275 357 263 373 Q 220 416 190 409 Q 178 403 188 382 Q 224 309 215 236 Q 211 166 182 133 Q 161 112 170 96 Q 183 78 203 66 Q 219 57 230 67 Q 243 83 283 99 Q 440 151 606 182 Q 757 210 789 197 C 819 193 826 247 796 244 Z",
    "M 789 197 Q 783 166 774 145 Q 756 118 785 55 Q 795 36 809 49 Q 837 73 846 173 Q 868 386 890 427 Q 900 443 889 460 Q 867 479 831 501 Q 816 510 802 503 Q 793 499 796 484 Q 823 435 796 244 L 789 197 Z",
  ],
};

let Chr1 = {
  character: "巴",
  definition: "to desire, to wish for",
  pinyin: ["bā"],
  decomposition: "⿻巳？",
  radical: "巳",
};

let Chr2 = {
  character: "山",
  definition: "mountain, hill, peak",
  pinyin: ["shān"],
  decomposition: "⿶凵丨",
  radical: "山",
};

let zhuang = {
  pos: "noun",
  word: "bya",
  sound: "/pʲa˨˦/",
  meaning: ["hill or mountain, especially one in karst terrain"],
};

let c = "black";
let C = "black";


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  colorMode(HSB, 100);
  rectMode(CENTER);
  displayInfo();
}

function displayInfo() {
  fill(60, 60, 70);
  stroke(0);
  rect(width / 3, height / 2 - 225, 300, 50);
  fill(100);
  stroke(0);
  rect(width / 3, height / 2 - 125, 300, 150);
  textSize(20);
  text("Generative Sawndip", width / 3 - 140, height / 2 - 225);
  textSize(12);
  noStroke();
  fill(20);
  text("Word: " + zhuang.word, width / 3 - 140, height / 2 - 175);
  text("Definition: " + zhuang.meaning, width / 3, height / 2 - 150, 280, 30);
  text("Part-of-speech: " + zhuang.pos, width / 3 - 140, height / 2 - 120);
  text("Pronunciation: " + zhuang.sound, width / 3 - 140, height / 2 - 100);
  text("Decomposition: " + "⿰ U+2FF0", width / 3 - 140, height / 2 - 80);

  fill(60, 60, 70);
  stroke(0);
  rect(width / 3, height / 2 + 25, 300, 50);
  fill(100);
  stroke(0);
  rect(width / 3, height / 2 + 125, 300, 150);
  textSize(20);
  text("Chinese Character", width / 3 - 140, height / 2 + 30);
}

function displayCharacter() {
  fill(100);
  stroke(0);
  rect((width * 2) / 3, height / 2, 300, 300);
  line((width * 2) / 3 - 150, height / 2, (width * 2) / 3 + 150, height / 2);
  line((width * 2) / 3, height / 2 - 150, (width * 2) / 3, height / 2 + 150);

  translate((width * 2) / 3 - 150, height / 2 + 120);

  push();
  translate(100, 0);
  scale(0.2, -0.3);
  let ctx01 = drawingContext;
  ctx01.fillStyle = C;
  ctx01.strokeStyle = C;
  for (let j = 0; j < chr01.strokes.length; j++) {
    p = new Path2D(chr01.strokes[j]);
    ctx01.fill(p);
  }

  translate(-450, 0);
  scale(0.7, 1);
  let ctx02 = drawingContext;
  ctx02.fillStyle = c;
  ctx02.strokeStyle = c;
  for (let j = 0; j < chr02.strokes.length; j++) {
    p = new Path2D(chr02.strokes[j]);
    ctx02.fill(p);
  }
  pop();
}

function draw() {
  if (
    mouseX > (width * 2) / 3 - 150 &&
    mouseX < (width * 2) / 3 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2 + 150
  ) {
    fill(255);
     stroke(0);
     rect(width / 3, height / 2 + 125, 300, 150);
    c = "red";
    C = "black";
    textSize(12);
    noStroke();
    fill(0);
    text("Character: " + Chr2.character, width / 3 - 140, height / 2 + 80);
    text("Definition: " + Chr2.definition, width / 3 - 140, height / 2 + 100);
    text("Pinyin: " + Chr2.pinyin, width / 3 - 140, height / 2 + 120);
  } else if (
    mouseX > (width * 2) / 3 &&
    mouseX < (width * 2) / 3 + 150 &&
    mouseY > height / 2 - 150 &&
    mouseY < height / 2 + 150
  ) {
    fill(255);
     stroke(0);
    rect(width / 3, height / 2 + 125, 300, 150);
    C = "red";
    c = "black";
    textColor = 100;
    textFill = 0;
    textSize(12);
    noStroke();
    fill(0);
    text("Character: " + Chr1.character, width / 3 - 140, height / 2 + 80);
    text("Definition: " + Chr1.definition, width / 3 - 140, height / 2 + 100);
    text("Pinyin: " + Chr1.pinyin, width / 3 - 140, height / 2 + 120);
  } else  {
    C = "black";
    c = "black";
     fill(255);
     stroke(0);
     rect(width / 3, height / 2 + 125, 300, 150);
  }

  displayCharacter();
}
