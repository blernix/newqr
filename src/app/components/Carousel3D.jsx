"use client";

import { useState, useEffect, useRef } from 'react';
import { Briefcase, Instagram, Linkedin, Send, Bitcoin, Copy } from 'lucide-react';
// 1. On importe la fonction `toast`
import toast from 'react-hot-toast';

const links = [
  { title: 'Portfolio', icon: <Briefcase size={40} className="text-white" />, url: 'https://creation.digitale.2minaci.xyz/' },
  { title: 'Instagram', icon: <Instagram size={40} className="text-white" />, url: 'https://www.instagram.com/lct_kiki/' },
  { title: 'LinkedIn', icon: <Linkedin size={40} className="text-white" />, url: 'https://www.linkedin.com/in/killian-lecrut-a80336176/' },
  { title: 'PayPal', icon: <Send size={40} className="text-white" />, url: 'https://www.paypal.com/paypalme/webcreater' },
  { title: 'BTC', icon: <Bitcoin size={40} className="text-white" />, isCrypto: true, address: 'bc1qhdj09ms9gehzkrt5vs7cv66k4pakh4l4qdnup0' },
  { title: 'ETH', icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid" className="text-white fill-current"><path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z M127.962 312.187l-1.586 1.92v92.23l1.586 10.66 127.96-212.32z"/></svg>, isCrypto: true, address: '0x6957a72016c295081Ae1f5f831889CCa0bF16263' },
];

export function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastRotation = useRef(0);
  const autoRotateRef = useRef(null);



  const startAutoRotate = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(() => {
      setRotation(r => r + 0.2);
    }, 50);
  };

  const stopAutoRotate = () => {
    clearInterval(autoRotateRef.current);
  };

  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(autoRotateRef.current);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    lastRotation.current = rotation;
    stopAutoRotate();
    if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
    }
  };

    // La fonction pour copier l'adresse, maintenant avec vibration
  const handleCopy = (address, title) => {
    navigator.clipboard.writeText(address).then(() => {
      // 1. Confirmation visuelle avec le toast
      toast.success(`Adresse ${title} copiée !`);

      // 2. Feedback haptique (vibration)
      if (navigator.vibrate) {
        navigator.vibrate(50); // Une vibration courte et subtile de 50ms
      }
    }).catch(err => {
      // Au cas où la copie échouerait
      toast.error("Erreur lors de la copie.");
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX.current;
    const newRotation = lastRotation.current + (deltaX * 0.5);
    setRotation(newRotation);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    startAutoRotate();
    if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 1s linear';
    }
  };
  
  const itemCount = links.length;
  const angle = 360 / itemCount;

  return (
    <div 
      className="w-full h-96 flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing"
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchEnd={handlePointerUp}
    >
      <div 
        ref={carouselRef}
        className="relative w-52 h-52 [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {links.map((link, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center p-4
                       bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
            style={{ transform: `rotateY(${i * angle}deg) translateZ(250px)` }}
          >
            {!link.isCrypto && (
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2">
                {link.icon}
                <span className="text-white font-semibold tracking-wider">{link.title}</span>
              </a>
            )}
            {link.isCrypto && (
              // 3. On appelle la fonction `handleCopy` au clic
              <div 
                onClick={() => handleCopy(link.address, link.title)}
                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
              >
                {link.icon}
                <span className="text-white font-semibold tracking-wider">{link.title}</span>
                <div className="flex items-center gap-1 text-xs text-gray-300">
                    Copier <Copy size={12} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}