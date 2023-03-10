import * as React from 'react'

export interface UseDisclosureProps {
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const { onClose, onOpen, isOpen } = props
  const [isOpenState, setIsOpen] = React.useState(isOpen || false)

  const onCloseAction = React.useCallback(() => {
    setIsOpen(false)
    onClose && onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onOpenAction = React.useCallback(() => {
    setIsOpen(true)
    onOpen && onOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onToggle = React.useCallback(() => {
    const action = isOpenState ? onCloseAction : onOpenAction
    action && action()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenState])

  return {
    isOpen: !!isOpenState,
    onOpen,
    onClose,
    onToggle,
  }
}

export default useDisclosure
