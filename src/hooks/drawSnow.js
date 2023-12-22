const drawWhiteSnow = ctx => {
  const branchLength = 15;

  ctx.beginPath();

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * (2 * Math.PI);
    const x = branchLength * Math.cos(angle);
    const y = branchLength * Math.sin(angle);

    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = '#FFFAFA';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
};

const drawBlueSnow = ctx => {
  const branchLength = 15;

  ctx.beginPath();

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * (2 * Math.PI);
    const x = branchLength * Math.cos(angle);
    const y = branchLength * Math.sin(angle);

    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = '#93E7FB';
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
};

export default drawWhiteSnow;

export { drawWhiteSnow, drawBlueSnow };
