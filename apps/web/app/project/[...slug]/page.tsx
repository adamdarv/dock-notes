import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@workspace/ui/components/select"
import { SidebarToggleTooltipContent } from "@/components/sidebar-toggle-tooltip-content"
import {
  IconDeviceLaptop,
  IconArrowLeft,
  IconSelector,
} from "@tabler/icons-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ProjectPage() {
  const projects = [
    {
      label: "Computer Science",
      value: "computer-science",
    },
    {
      label: "Mathematics",
      value: "mathematics",
    },
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="ghost" size="icon">
                    <IconArrowLeft />
                  </Button>
                }
              />
              <TooltipContent>Go back</TooltipContent>
            </Tooltip>
            <Select items={projects}>
              <SelectTrigger className="flex-1">
                <IconDeviceLaptop />{" "}
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.value} value={project.value}>
                    <div className="flex items-center gap-2">
                      <IconDeviceLaptop /> {project.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-fit w-full items-center gap-2.5 p-1.5 px-2"
                >
                  <Avatar size="sm">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                  <IconSelector className="ml-auto" />
                </Button>
              }
            />
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <div data-slot="content">
        <div className="w-full p-2">
          <Tooltip>
            <TooltipTrigger render={<SidebarTrigger />} />
            <SidebarToggleTooltipContent />
          </Tooltip>
        </div>
      </div>
    </SidebarProvider>
  )
}
