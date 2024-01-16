import { renderHook, act } from "@testing-library/react-hooks"

import useVisualMode from "hooks/useVisualMode"

const FIRST = "FIRST"

test("useVisualMode shold initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST))

  expect(result.current.mode).toBe(FIRST)
})