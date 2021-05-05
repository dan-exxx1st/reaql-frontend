import React, { FC, useEffect, useRef, useState } from 'react';
import { StyledScrollableWrapper } from './style';

interface IProps {
    scrollEvent?: () => void;
    className?: string;
}

const ScrollableWrapper: FC<IProps> = ({ children, ...props }) => {
    const { scrollEvent } = props;

    const ref = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const current = ref?.current;
        let scrolling = false;
        if (current) {
            current.onscroll = () => {
                scrolling = true;
            };

            if (!scrolled) {
                current.scrollTop = current.scrollHeight;
                setScrolled(true);
            }
        }

        setInterval(() => {
            if (scrolling) {
                scrolling = false;
                if (current && current.scrollTop < 100) {
                    scrollEvent && scrollEvent();
                }
            }
        }, 300);
    }, [scrollEvent, scrolled]);

    return (
        <StyledScrollableWrapper ref={ref} {...props}>
            {children}
        </StyledScrollableWrapper>
    );
};

export default ScrollableWrapper;
