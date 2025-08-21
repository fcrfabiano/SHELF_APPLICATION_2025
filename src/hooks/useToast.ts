// -- IMPORTS

import * as React from "react"

// -- TYPES

type ToastActionElement = React.ReactNode

type ToastProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
}

// -- CONSTANTS

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

// -- TYPES

type ToastItem = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const toastActionType = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let toastIdCounter = 0

function generateId() {
  toastIdCounter = (toastIdCounter + 1) % Number.MAX_SAFE_INTEGER
  return toastIdCounter.toString()
}

type ToastActionType = typeof toastActionType

type ToastAction =
  | {
      type: ToastActionType["ADD_TOAST"]
      toast: ToastItem
    }
  | {
      type: ToastActionType["UPDATE_TOAST"]
      toast: Partial<ToastItem>
    }
  | {
      type: ToastActionType["DISMISS_TOAST"]
      toastId?: ToastItem["id"]
    }
  | {
      type: ToastActionType["REMOVE_TOAST"]
      toastId?: ToastItem["id"]
    }

interface ToastState {
  toasts: ToastItem[]
}

// -- VARIABLES

const toastIdToTimeoutMap = new Map<string, ReturnType<typeof setTimeout>>()

// -- FUNCTIONS

const enqueueToastRemoval = (toastId: string) => {
  if (toastIdToTimeoutMap.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastIdToTimeoutMap.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastIdToTimeoutMap.set(toastId, timeout)
}

export const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((currentToast) =>
          currentToast.id === action.toast.id ? { ...currentToast, ...action.toast } : currentToast
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        enqueueToastRemoval(toastId)
      } else {
        state.toasts.forEach((currentToast) => {
          enqueueToastRemoval(currentToast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((currentToast) =>
          currentToast.id === toastId || toastId === undefined
            ? {
                ...currentToast,
                open: false,
              }
            : currentToast
        ),
      }
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((currentToast) => currentToast.id !== action.toastId),
      }

    default:
      return state
  }
}

const stateListenerArray: Array<(state: ToastState) => void> = []

let currentState: ToastState = { toasts: [] }

function dispatch(action: ToastAction) {
  currentState = toastReducer(currentState, action)
  stateListenerArray.forEach((listener) => {
    listener(currentState)
  })
}

type ToastInput = Omit<ToastItem, "id">

function toast({ ...props }: ToastInput) {
  const id = generateId()

  const update = (propsToUpdate: ToastItem) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...propsToUpdate, id },
    })

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(currentState)

  React.useEffect(() => {
    stateListenerArray.push(setState)
    return () => {
      const index = stateListenerArray.indexOf(setState)
      if (index > -1) {
        stateListenerArray.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }