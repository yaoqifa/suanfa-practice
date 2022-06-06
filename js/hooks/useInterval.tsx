import React, {useRef, useEffect } from 'react'

function useInterval(fn, time) {
  const ref = useRef(fn)
  ref.current = fn
  useEffect(() => {
    const timer = setInterval(() => ref.current(), time)
    return () => clearInterval(timer)
  }, [])
}

export default useInterval

