<script>
  import Matter from 'matter-js';
  import { getSiteTheme } from '../utils/theme';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  onMount(() => {
    const {
      Engine,
      Events,
      Render,
      Runner,
      Composite,
      Constraint,
      Bodies,
      MouseConstraint,
      Mouse,
      Body,
    } = Matter;

    const engine = Engine.create(),
      world = engine.world;

    const render = Render.create({
      element: document.getElementById('double-pendelum'),
      engine: engine,
      options: {
        width: (window.innerWidth * 4) / 5,
        height: (window.innerHeight * 1) / 2,
        background: 'transparent',
        wireframes: false,
      },
    });

    const newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

    const number = 5;
    const xx = 280;
    const yy = 50;
    const size = 30;
    const length = 300;

    for (let i = 0; i < number; i++) {
      const separation = 1.9,
        circle = Bodies.circle(
          xx + i * (size * separation),
          yy + length,
          size,
          {
            inertia: Infinity,
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: 1,
            render: { fillStyle: '#2a9d8fff' },
          }
        ),
        constraint = Constraint.create({
          pointA: { x: xx + i * (size * separation), y: yy },
          bodyB: circle,
          render: { strokeStyle: getSiteTheme() == 'dark' ? 'white' : 'black' },
        });

      Composite.addBody(newtonsCradle, circle);
      Composite.addConstraint(newtonsCradle, constraint);
    }

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, newtonsCradle);

    Body.translate(newtonsCradle.bodies[0], { x: -140, y: -100 });
    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    Render.lookAt(render, {
      min: { x: 0, y: 50 },
      max: { x: 800, y: 600 },
    });

    return () => {
      Render.stop(render);
    };
  });
</script>

<div id="double-pendelum"></div>
