function animate(){
    ctx1.clearRect(0,0,canvas.width,canvas.height);
    ctx2.clearRect(0,0,canvas.width,canvas.height);
    ctx3.clearRect(0,0,canvas.width,canvas.height);
    background.draw();
    background.update();
    handleObstacles();
    frogger.draw();
    frogger.update();
    levels();
    scoreBoard();

    requestAnimationFrame(animate); 
}

animate();


