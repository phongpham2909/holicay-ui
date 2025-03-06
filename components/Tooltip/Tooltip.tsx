import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { cloneElement } from '@/utilities';
import { PREFIX_CLASS } from '@/variables/app';

import './tooltip.css';

export interface TooltipProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  color?: 'dark' | 'light';
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'left'
    | 'leftTop'
    | 'leftBottom'
    | 'right'
    | 'rightTop'
    | 'rightBottom';
  trigger?: 'hover' | 'click' | 'focus';
  showArrow?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  prefixCls?: string;
  className?: string;
  tooltipClassName?: string;
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  description,
  children,
  color = 'dark',
  placement = 'top',
  trigger = 'hover',
  showArrow = true,
  disabled = false,
  defaultOpen = false,
  className,
  tooltipClassName,
  prefixCls = PREFIX_CLASS,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!tooltipRef.current || !childRef.current) return;
    const tooltip = tooltipRef.current;
    const child = childRef.current;
    const rect = child.getBoundingClientRect();

    let top = rect.top + window.scrollY;
    let left = rect.left + window.scrollX;

    if (placement.startsWith('top')) top -= tooltip.offsetHeight + 10;
    if (placement.startsWith('bottom')) top += rect.height + 10;
    if (placement.startsWith('left')) left -= tooltip.offsetWidth + 10;
    if (placement.startsWith('right')) left += rect.width + 10;

    if (['top', 'bottom'].includes(placement)) {
      left += rect.width / 2 - tooltip.offsetWidth / 2;
    } else if (placement === 'topLeft' || placement === 'bottomLeft') {
      left -= 12;

      if (!!arrowRef.current) {
        arrowRef.current.style.right = 'auto';
        arrowRef.current.style.left = `${rect.width / 2 + 12}px`;
      }
    } else if (placement === 'topRight' || placement === 'bottomRight') {
      left += rect.width - tooltip.offsetWidth + 12;

      if (!!arrowRef.current) {
        arrowRef.current.style.right = `${rect.width / 2}px`;
        arrowRef.current.style.left = 'auto';
      }
    }

    if (['left', 'right'].includes(placement)) {
      top += rect.height / 2 - tooltip.offsetHeight / 2 - 2;
    } else if (placement === 'leftTop' || placement === 'rightTop') {
      if (tooltip.offsetHeight > 32) {
        top -= 12;
        if (!!arrowRef.current) {
          arrowRef.current.style.top = `${rect.height / 2 + 12}px`;
          arrowRef.current.style.bottom = 'auto';
        }
      } else {
        top -= 0;
      }
    } else if (placement === 'leftBottom' || placement === 'rightBottom') {
      if (tooltip.offsetHeight > 32) {
        top += rect.height - tooltip.offsetHeight + 12;
        if (!!arrowRef.current) {
          arrowRef.current.style.top = 'auto';
          arrowRef.current.style.bottom = `${rect.height / 2}px`;
        }
      } else {
        top += rect.height - tooltip.offsetHeight;
      }
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }, [isOpen, placement]);

  const handleTrigger = () => {
    if (disabled) return;
    setIsOpen((open) => !open);
  };

  const handleShow = () => {
    if (disabled) return;
    setIsOpen(true);
  };

  const handleHide = () => {
    if (disabled) return;
    setIsOpen(false);
  };

  if (!children || !React.isValidElement(children)) return null;

  const enhancedChildren = cloneElement(children, {
    ref: childRef,
    disabled,
    className: clsx(
      (children.props as Record<string, any>)?.className,
      `${prefixCls}-tooltip-trigger`,
      className,
      {
        [`${prefixCls}-tooltip-open`]: isOpen,
      }
    ),
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      (children.props as Record<string, any>)?.onClick?.(event);
      if (trigger === 'click') handleTrigger();
    },
    onMouseEnter: trigger === 'hover' ? handleShow : undefined,
    onMouseLeave: trigger === 'hover' ? handleHide : undefined,
    onFocus: trigger === 'focus' ? handleShow : undefined,
    onBlur: trigger === 'focus' ? handleHide : undefined,
  });

  return (
    <>
      {enhancedChildren}

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={tooltipRef}
              className={clsx(
                `${prefixCls}-tooltip`,
                `${prefixCls}-tooltip-${color}`,
                `${prefixCls}-tooltip-placement-${placement}`,
                tooltipClassName
              )}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className={clsx(`${prefixCls}-tooltip-content`)}>
                {title && (
                  <span className={clsx(`${prefixCls}-tooltip-content-title`)}>{title}</span>
                )}
                {description && (
                  <span className={clsx(`${prefixCls}-tooltip-content-desc`)}>{description}</span>
                )}
              </div>

              {showArrow && (
                <div
                  ref={arrowRef}
                  className={clsx(`${prefixCls}-tooltip-arrow`)}
                  style={{
                    top: placement.startsWith('top')
                      ? '100%'
                      : placement.startsWith('bottom')
                        ? 0
                        : '50%',
                    left: placement.startsWith('left')
                      ? '100%'
                      : placement.startsWith('right')
                        ? 0
                        : '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
