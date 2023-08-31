import { throttle } from 'lodash'
import { useCallback, useRef, useState } from 'react'

export function useThrottledValue() {
  const [rawValue, setRawValue] = useState('')
  const [throttledValue, setThrottledValue] = useState('')
  const throttledSetterRef = useRef(throttle(setThrottledValue, 1_000))

  const setValue = useCallback((value: string) => {
    setRawValue(value)
    throttledSetterRef.current(value)
  }, [])

  return { rawValue, setValue, throttledValue }
}
