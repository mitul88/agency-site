'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const ProgressIndicator = () => {
  return (
        <ProgressBar
            height="4px"
            color="#20B15A"
            options={{ showSpinner: false }}
            shallowRouting
        />
    )
}

export default ProgressIndicator