import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  highlightWords = [], // array of words to highlight (case-insensitive)
  highlightClass = 'text-purple-500'
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [bp, setBp] = useState('md'); // responsive breakpoint key

  // Determine breakpoint and update on resize
  useEffect(() => {
    const computeBp = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (w < 480) return 'xs';
      if (w < 640) return 'sm';
      if (w < 1024) return 'md';
      if (w < 1280) return 'lg';
      return 'xl';
    };
    setBp(computeBp());
    let raf;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setBp(computeBp()));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {
          /* ignore */
        }
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Responsive adjustments
      const effectiveSplitType = bp === 'xs' ? 'words' : splitType;
      const effectiveDelay = bp === 'xs' ? Math.min(delay, 40) : delay;
      const effectiveDuration = bp === 'xs' ? Math.min(duration, 0.5) : duration;
      const effectiveFrom = {
        ...from,
        y: typeof from.y === 'number' ? (bp === 'xs' ? Math.min(from.y, 30) : from.y) : from.y
      };
      const effectiveTo = { ...to };

      let targets;
      const assignTargets = self => {
        if (splitType.includes('chars') && self.chars.length) targets = self.chars;
        if (!targets && splitType.includes('words') && self.words.length) targets = self.words;
        if (!targets && splitType.includes('lines') && self.lines.length) targets = self.lines;
        if (!targets) targets = self.chars || self.words || self.lines;
      };

      const splitInstance = new GSAPSplitText(el, {
        type: effectiveSplitType,
        smartWrap: true,
        autoSplit: effectiveSplitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: self => {
          // Highlight words before animation if requested
          if (highlightWords.length && self.words?.length) {
            const normalizedTargets = highlightWords.map(w => w.toLowerCase().replace(/[^\w]/g, ''))
            self.words.forEach(wordSpan => {
              const raw = wordSpan.textContent || ''
              const cleaned = raw.toLowerCase().replace(/[^\w]/g, '')
              if (normalizedTargets.includes(cleaned)) {
                wordSpan.classList.add(...highlightClass.split(' '))
              }
            })
          }
          assignTargets(self);
          return gsap.fromTo(
            targets,
            { ...effectiveFrom },
            {
              ...effectiveTo,
              duration: effectiveDuration,
              ease,
              stagger: effectiveDelay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              willChange: 'transform, opacity',
              force3D: true
            }
          );
        }
      });
      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {
          /* ignore */
        }
        el._rbsplitInstance = null;
      };
    },
    {
    dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
  onLetterAnimationComplete,
  highlightWords.join(','),
  highlightClass,
  bp
      ],
      scope: ref
    }
  );

  const renderTag = () => {
    const style = {
      textAlign,
      wordWrap: 'break-word',
      overflowWrap: 'anywhere',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref} style={style} className={classes}>
            {text}
          </h6>
        );
      default:
        return (
          <p ref={ref} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };
  return renderTag();
};

export default SplitText;
