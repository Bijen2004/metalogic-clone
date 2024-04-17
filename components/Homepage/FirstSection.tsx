'use client'

import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const FirstSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [stars, setStars] = useState<{ x: number; y: number; radius: number; vx: number; vy: number }[]>([]);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const FPS = 60;
  const mouseRef = useRef<{ x: number; y: number; hovered: boolean }>({ x: 0, y: 0, hovered: false });

  useEffect(() => {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current.getBoundingClientRect();
      setCanvasSize({ width, height });
      setCenterX(width / 2);
      setCenterY(height / 2);
      const initialStars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
      for (let i = 0; i < 100; i++) {
        initialStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1 + 1,
          vx: Math.random() * 20 - 10,
          vy: Math.random() * 20 - 10
        });
      }
      setStars(initialStars);
      draw();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const { left, top } = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.hovered = true;
      if (isVisible) {
        draw();
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
     
    };
  }, [isVisible]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    const mouseX = mouseRef.current.hovered ? mouseRef.current.x : centerX;
    const mouseY = mouseRef.current.hovered ? mouseRef.current.y : centerY;
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    }
    ctx.beginPath();
    for (let i = 0; i < stars.length; i++) {
      const starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance({ x: mouseX, y: mouseY }, starI) < 150) ctx.lineTo(mouseX, mouseY);
      for (let j = 0; j < stars.length; j++) {
        const starII = stars[j];
        if (distance(starI, starII) < 150) {
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  };

  const distance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
    let xs = point2.x - point1.x;
    xs *= xs;
    let ys = point2.y - point1.y;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };
  const handleMouseEnter = () => {
    setIsVisible(true);
    mouseRef.current.hovered = true;
    draw();
  };

  const handleMouseLeave = () => {
    setIsVisible(true);
    mouseRef.current.hovered = false;
    
  };


  return (
    <div className="text-center text-white h-screen overflow-hidden  bg-cover" style={{ backgroundImage: "url('/herobg.svg')" }} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
       <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          width={canvasSize.width}
          height={canvasSize.height}
        />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <div>
            <div className='mb-8 text-4xl font-semibold lg:text-6xl'>
                Transforming Today <br/> For <br/> Digital Tomorrow
            </div>
            <div className='w-[90vw] font-semibold lg:w-full'>
            We are committed to offering state-of-the-art software solutions that<br/>
            enable companies to prosper in the digital world.
            </div>
        </div>
        <Link className='flex justify-center pt-10' href={'/about'}>
          <div className='flex gap-2 group rounded-lg bg-black/30 px-8 py-3 transition-all duration-500 hover:bg-red-500 items-center'>
            <div>
              Learn More
            </div>
            <div className='transition-all duration-500 group-hover:translate-x-2'>
              <FaArrowRight />
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default FirstSection