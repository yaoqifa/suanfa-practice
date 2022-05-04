import classNames from 'classnames';
import React, { FC, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mergeProps } from '../../utils/with-default-props';
import './index.less';

const classPrefix = 'foodie-toast';
let timer: ReturnType<typeof setTimeout>

export type ToastProps = {
  /** toast 内容 */
  content: string;
  /** 持续时间 */
  duration: number;
  /** 透明度 */
  opacity?: number;
};

const defaultProps = {
  content: '',
  duration: 2000,
  opacity: 0.8,
};

// 增加事件系统，on和emit toast事件
// 暴露出 toast.success('content', delay), 内部emit事件

const Toast: FC<ToastProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    timer = setTimeout(() => {
      setShow(false)
    }, props.duration)
    return () => clearTimeout(timer)
  }, [props.duration]);

  const node = (
    <div
      className={classNames(classPrefix, {
        ['hidden']: !show
      })}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${props.opacity})`,
      }}
      ref={ref}
    >
      {props.content}
    </div>
  );

  return createPortal(node, document.body);
};

export default Toast;

// css
// .foodie-toast {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
//   padding: 10px;
//   color: #fff;
//   border-radius: 4px;
//   transition: all 0.2s;
//   &.hidden {
//     display: none;
//   }
// }
