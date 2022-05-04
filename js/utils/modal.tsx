import classNames from 'classnames';
import React, { FC, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Style from './index.module.less'

interface MaskProps {
  visible?: boolean;
  disableBodyScroll?: false,
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Mask: FC<MaskProps> = (props) => {
  const { visible } = props
  const ref = useRef(null)

  const handleClick = (e) => {
    props.onMaskClick?.(e)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {

    if (ref.current) {
      if (visible) {
        ref.current.addEventListener('touchmove', handleTouchMove, {
          passive: false
        })
      } else {
        ref.current.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [visible])
  const node = (<>
    <div className={classNames(Style.maskWrap, {
      ['hidden']: !visible
    })} ref={ref} onClick={handleClick}>
      {visible && props.children}
    </div>
  </>)
  return createPortal(node, document.body)
}

export default Mask;

// style
// .modalWrap {
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   display: block;
//   width: 100%;
//   height: 100%;
//   opacity: rgba(0, 0, 0, 0.75)
//   &.hidden {
//     display: none;
//   }
// }

const Modal:FC<IProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  return (
    <>
      {
        props.visible ? <>
          <Mask
            visible={props.visible}
            onMaskClick={() => {
              if (props.closeOnMaskClick) {
                props.onClose();
              }
            }}
            className={props.maskClassName}
            style={props.maskStyle}
            disableBodyScroll={false}
          />
          <div className="hb-modal-box">
            <div className={classNames('hb-modal-content', props.classname)}>
            {props.content}
            </div>
            {props.children}
          </div>
        </> : <></>
      }
    </>
  );
};
export HBModal;