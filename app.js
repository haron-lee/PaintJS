const canvas = document.getElementById("jsCanvas");
let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // mousemove event에서 client X,Y는 윈도우 전체의 범위
  // mousemove event에서 offset X, Y는 canvas 안에서의 범위
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

// leave는 mouse event가 stop하는 구간이라 stopPainting 함수만 사용
// function onMouseLeave(event) {
//   painting = false;
// }

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  // mousedown은 click event
  canvas.addEventListener("mousedown", onmousedown);
  // mouseup은 click 후 손을 떼었을 때 event
  canvas.addEventListener("mouseup", onMouseUp);
  // canvas에서 leave 했을 때 event
  canvas.addEventListener("mouseleave", stopPainting);
}
