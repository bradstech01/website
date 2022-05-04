let space;
Pts.namespace(window);

function dnaAnimate(){
  space = new CanvasSpace("#pts");
  let form = space.getForm();
  space.setup({ bgcolor: "#000", resize: true});

  space.add((time, ftime) => {
    let offset = space.size.$multiply(.4).y;
    let line = new Group( new Pt(0, space.size.y/2 ), new Pt( space.size.x, space.size.y/2) );
    let pts = Line.subpoints( line, 70 );

    let pps = pts.map( (p) => Geom.perpendicular( p.$subtract( line[0] ).unit() ).add(p) );

    pps.forEach( (pp, i) => {
      let t = i/200 * Const.two_pi + Num.cycle(time%10000/10000);

      if (i%2===0) {
        pp[0].to( Geom.interpolate( pts[i], pp[0], Math.sin( t )*offset*Num.cycle(time%5500/5500) ) );
        pp[1].to( pts[i] );
        form.stroke("#03A9F4", 2).line(pp);
      } else {
        pp[0].to( pts[i] );
        pp[1].to( Geom.interpolate( pts[i], pp[1], Math.cos( t )*offset*Num.cycle(time%5500/5500) ) );
        form.stroke("#FF5252", 2).line(pp);
      }
    });
  });
  space.play().bindMouse().bindTouch();
}

dnaAnimate();
