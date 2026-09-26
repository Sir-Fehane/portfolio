"use client";

import React, { useEffect, useRef } from "react";

interface MatrixRainProps {
  primaryColor?: string;
  glowColor?: string;
  headColor?: string;
  fontSize?: number;
  fps?: number;
  opacity?: number;
  className?: string;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({
  primaryColor = "#C23646",
  glowColor = "#e0011bff",
  headColor = "#f10404ff",
  fontSize = 14,
  fps = 30,
  opacity = 0.45,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = 0;
    const interval = 1000 / fps;

    // Caracteres estilo Matrix con toque ciberseguridad / DevSecOps
    const characters =
      "01010101010101ABCDEF0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜXYZ{}<>[]/*+=~#$&@!|^⚡λ§";
    const charArray = characters.split("");

    let columns = 0;
    let drops: number[] = [];
    let dropSpeeds: number[] = [];

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      columns = Math.floor(width / fontSize);
      drops = [];
      dropSpeeds = [];

      for (let i = 0; i < columns; i++) {
        // Posición Y inicial desfasada hacia arriba para que caigan de forma orgánica
        drops[i] = Math.floor(Math.random() * -50);
        // Variación ligera de velocidad por columna
        dropSpeeds[i] = 0.75 + Math.random() * 0.5;
      }

      // Fondo inicial oscuro
      ctx.fillStyle = "rgba(13, 14, 17, 1)";
      ctx.fillRect(0, 0, width, height);
    };

    setupCanvas();

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (!isVisible) return;

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      // Efecto de desvanecimiento de estela (fade out)
      ctx.fillStyle = "rgba(24, 25, 30, 0.14)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const char = charArray[Math.floor(Math.random() * charArray.length)];

        if (y > 0 && y < height + fontSize * 2) {
          // Cabeza del flujo: blanco / resplandor brillante
          ctx.shadowBlur = 8;
          ctx.shadowColor = glowColor;
          ctx.fillStyle = headColor;
          ctx.fillText(char, x, y);

          // Cuerpo de la estela en tono rojo rubí
          if (drops[i] > 1) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = primaryColor;
            ctx.fillStyle = primaryColor;
            const prevChar =
              charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(prevChar, x, y - fontSize);
          }
        }

        // Reiniciar cuando pasa el fondo con un factor aleatorio
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += dropSpeeds[i];
      }
      ctx.shadowBlur = 0;
    };

    animationFrameId = requestAnimationFrame(draw);

    // Pausar si no está en el viewport para optimizar rendimiento
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Redimensionar responsivamente
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupCanvas();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [primaryColor, glowColor, headColor, fontSize, fps]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
