import { useCallback, useEffect, useState, useRef } from 'react';
import { View, Text } from '@tarojs/components';
import Style from './index.module.less';

// 2022-05-05 15:00:00

interface IProps {
  finishDate: string
}
interface IRemain {
  second: number;
  minute: number;
  hour: number;
  day: number
}
let timer
function CountDown(props: IProps = {finishDate: '2022-05-05 15:00:00'}) {
  const { finishDate } = props;
  const [remain, setRemain] = useState<IRemain>({
    second: 0,
    minute: 0,
    hour: 0,
    day: 0
  })
  const tick = useCallback(() => {
    const tt = Math.floor((new Date(props.finishDate).getTime() - Date.now()) / 1000)
    if (tt <= 0) {
      clearInterval(timer)
      return
    }
    const day = Math.floor(tt / (24 * 60 * 60))
    const hour = Math.floor((tt - day * 24 * 60 * 60) / (60 * 60))
    const minute = Math.floor((tt - day * 24 * 60 * 60 - hour * 60 * 60) / 60)
    const second = Math.floor(tt - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60)
    setRemain({
      second,
      minute,
      hour,
      day
    })
  }, [finishDate])

  useEffect(() => {
    // console.log('count down.........', remain);
    timer = setTimeout(() => {
      tick()
    }, 1000)
    return () => clearTimeout(timer)
  }, [remain, tick]);

  return (
    <div className={Style.indexWrap}>
      // <span>距离{finishDate} 倒计时剩余{remain.day}天{remain.hour}时{remain.minute}分{remain.second}秒</span>
    </div>
  );
}

export default CountDown;
