import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    viewport?: UseInViewOptions;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({
    children,
    delay = 0,
    className = '',
    viewport = { once: true, margin: "-50px" },
    direction = 'up'
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as const,
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
