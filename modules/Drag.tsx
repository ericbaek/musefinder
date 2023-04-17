import { useRef, useEffect, useState, SetStateAction } from "react";

function Dragging() {
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const activityRef = useRef(null);
  
    useEffect(() => {
      if (!isDragging) return;
  
      function handleMouseMove(event: { clientY: number; }) {
        const deltaY = event.clientY - startY;
        setCurrentY(startY + deltaY);
      }
  
      function handleMouseUp() {
        setIsDragging(false);
      }
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, startY]);
  
    function handleMouseDown(event: { clientY: SetStateAction<number>; }) {
      setIsDragging(true);
      setStartY(event.clientY);
    }
  
}

export default Dragging