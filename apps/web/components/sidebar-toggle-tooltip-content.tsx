"use client"

import { Kbd } from "@workspace/ui/components/kbd"
import { TooltipContent } from "@workspace/ui/components/tooltip"
import { useIsMac } from "@/hooks/use-is-mac"

export function SidebarToggleTooltipContent() {
  const isMac = useIsMac()

  return (
    <TooltipContent>
      <p>Toggle Sidebar</p>
      <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
      <Kbd>B</Kbd>
    </TooltipContent>
  )
}
