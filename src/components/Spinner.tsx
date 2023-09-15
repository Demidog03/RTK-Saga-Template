import {FC} from 'react'
import {Pane, Spinner as CoreSpinner} from 'evergreen-ui'
import {useSelector} from '../store'
import {spinnerSelector} from '../store/spinner/spinner.slice.ts'

const Spinner: FC<{overlayShown?: boolean}> = ({overlayShown = true}) => {
  const open = useSelector(spinnerSelector)

  if(open) {
    return (
        <Pane display="flex"
              position="fixed"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100dvh"
              background={overlayShown ? 'rgba(0, 0, 0, 0.1)' : 'transparent'}>
          <CoreSpinner />
        </Pane>
    )
  }
}

export default Spinner
