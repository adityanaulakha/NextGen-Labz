import { useEffect, useRef } from 'react';

// Assets
import cssIcon from '../assets/carousel/css.svg';
import figmaIcon from '../assets/carousel/figma.svg';
import htmlIcon from '../assets/carousel/html.png';
import instagramIcon from '../assets/carousel/instagram.svg';
import javascriptIcon from '../assets/carousel/javascript.svg';
import linuxIcon from '../assets/carousel/linux.svg';
import n8nIcon from '../assets/carousel/n8n.svg';
import nextIcon from '../assets/carousel/nextdotjs.svg';
import nodeIcon from '../assets/carousel/nodejs.png';
import photoshopIcon from '../assets/carousel/photoshop.svg';
import premiereIcon from '../assets/carousel/premierepro.svg';
import pythonIcon from '../assets/carousel/python.png';
import reactIcon from '../assets/carousel/react.png';
import tailwindIcon from '../assets/carousel/tailwindcss.svg';
import typescriptIcon from '../assets/carousel/typescript.png';
import vercelIcon from '../assets/carousel/vercel.svg';

const techStack = [
  { name: 'Linux', src: linuxIcon, color: 'from-[#FCC624] to-[#E6AC00]' },
  { name: 'CSS', src: cssIcon, color: 'from-[#264de4] to-[#1e3fb8]' },
  { name: 'TypeScript', src: typescriptIcon, color: 'from-[#3178C6] to-[#235A97]' },
  { name: 'JavaScript', src: javascriptIcon, color: 'from-[#F7DF1E] to-[#E4C300]' },
  { name: 'Python', src: pythonIcon, color: 'from-[#3776ab] to-[#2d5aa0]' },
  { name: 'HTML', src: htmlIcon, color: 'from-[#e34c26] to-[#f06529]' },
  { name: 'Node.js', src: nodeIcon, color: 'from-[#68A063] to-[#417E38]' },
  { name: 'n8n', src: n8nIcon, color: 'from-[#EA4B71] to-[#D63384]' },
  { name: 'Tailwind CSS', src: tailwindIcon, color: 'from-[#06B6D4] to-[#0891B2]' },
  { name: 'Figma', src: figmaIcon, color: 'from-[#F24E1E] to-[#A259FF]' },
  { name: 'React', src: reactIcon, color: 'from-[#61DAFB] to-[#21A5C4]' },
  { name: 'Next.js', src: nextIcon, color: 'from-white to-white' },
  { name: 'Vercel', src: vercelIcon, color: 'from-white to-white' },
  { name: 'Instagram', src: instagramIcon, color: 'from-[#E4405F] to-[#FFDC80]' },
  { name: 'Premiere Pro', src: premiereIcon, color: 'from-[#9999FF] to-[#6666CC]' },
  { name: 'Photoshop', src: photoshopIcon, color: 'from-[#31A8FF] to-[#0078D4]' }
];

/**
 * Seamless infinite horizontal carousel using requestAnimationFrame.
 * Avoids CSS animation reset jump by manually wrapping translation.
 */
export default function TechCarousel({ speed = 55 }) { // speed = pixels/second
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const setWidthRef = useRef(0);
  const posRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Build two sets for seamless scroll
    if (track.children.length === 0) {
      const buildSet = (dup = false) => {
        techStack.forEach((t, i) => {
          const wrapper = document.createElement('div');
          wrapper.className = 'group flex flex-col items-center gap-2 sm:gap-3 min-w-[70px] sm:min-w-[80px]';
          wrapper.setAttribute('role', 'listitem');
          if (dup) wrapper.setAttribute('aria-hidden', 'true');
          wrapper.innerHTML = `
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${t.color.includes('from-white') ? 'ring-1 ring-neutral-200/40' : ''}">
              <img src="${t.src}" alt="${dup ? '' : t.name}" ${dup ? 'aria-hidden="true"' : ''} class="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <span class="text-[10px] sm:text-xs text-neutral-400 group-hover:text-white transition-colors text-center font-medium tracking-wide">${t.name}</span>
          `;
          track.appendChild(wrapper);
        });
      };
      buildSet(false);
      buildSet(true);
    }

    // Measure width of one full set (half of children)
    const half = Array.from(track.children).slice(0, techStack.length);
    setWidthRef.current = half.reduce((acc, el) => acc + el.getBoundingClientRect().width, 0);
    // Include computed gap by measuring offsetLeft differences
    // Simpler: use scrollWidth / 2 after render
    setWidthRef.current = track.scrollWidth / 2;

    const animate = (now) => {
      const delta = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;
      posRef.current -= speed * delta;
      const setWidth = setWidthRef.current;
      if (posRef.current <= -setWidth) {
        posRef.current += setWidth; // wrap seamlessly
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      // Recalculate on resize; keep relative position percentage
      const progress = (-posRef.current) / setWidthRef.current;
      setWidthRef.current = track.scrollWidth / 2;
      posRef.current = -progress * setWidthRef.current;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="carousel-edge-left" aria-hidden="true" />
      <div className="carousel-edge-right" aria-hidden="true" />
      <div
        ref={trackRef}
        role="list"
        aria-label="Technology stack logos scrolling horizontally"
        className="flex items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 will-change-transform select-none"
        style={{ transform: 'translateX(0)' }}
      />
    </div>
  );
}
