import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function BreadcrumbComp({ }) {

    return (
        <div className="flex flex-col md:flex-row justify-between mb-5 items-start md:items-center">
            <h2 className="text-2xl md:text-4xl font-semibold">Create New Trip</h2>
            <Breadcrumb className="mt-2 md:mt-0 lg:mt-0">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>

                    </BreadcrumbItem>
                    {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon-sm" variant="ghost">
                                <BreadcrumbEllipsis />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Documentation</DropdownMenuItem>
                                <DropdownMenuItem>Themes</DropdownMenuItem>
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem> */}
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/trips">Trips</BreadcrumbLink>


                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Create New Trip</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
