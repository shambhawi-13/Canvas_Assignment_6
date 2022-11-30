const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const image = document.getElementById('girl');
const girl = {
    w: 90,
    h: 90,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};

function draw_image() {
    ctx.drawImage(image, girl.x, girl.y, girl.w, girl.h)
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function update_position() {
    girl.x += girl.dx;
    girl.y += girl.dy;
    detectWalls();

}

function detectWalls() {
    if (girl.x < 0) {
        girl.x = 0;
    }
    if (girl.y < 0) {
        girl.y = 0;
    }
    if (girl.x + girl.w > canvas.width) {
        girl.x = canvas.width - girl.w;
    }
    if (girl.y + girl.h > canvas.height) {
        girl.y = canvas.height - girl.h;
    }
}
function update() {
    clear();

    draw_image();

    update_position();

    requestAnimationFrame(update);
}
function moveUp() {
    girl.dy = -girl.speed;
}

function moveDown() {
    girl.dy = girl.speed;
}

function moveRight() {
    girl.dx = girl.speed;
}

function moveLeft() {
    girl.dx = -girl.speed;
}

function keyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowRight" || e.key === "Right") {
        moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
        moveLeft();
    } else if (e.key === "ArrowUp" || e.key === "Up") {
        moveUp();
    } else if (e.key === "ArrowDown" || e.key === "Down") {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == "Right" ||
        e.key == "ArrowRight" ||
        e.key == "Left" ||
        e.key == "ArrowLeft" ||
        e.key == "Up" ||
        e.key == "ArrowUp" ||
        e.key == "Down" ||
        e.key == "ArrowDown"
    ) {
        girl.dx = 0;
        girl.dy = 0;
    }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
