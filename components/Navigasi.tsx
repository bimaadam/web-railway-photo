"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";

export function Navigasi() {
    return (
        <>
            <Navbar fluid rounded className="bg-gray-100 dark:bg-blue-950 dark:text-white">
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold">
                        Railway Photograph
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={true}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img=""
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">User</span>
                            <span className="block truncate text-sm font-medium">railway@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item href="/Dashboard">Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active className="text-black hover:text-purple-600">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-black hover:text-purple-600">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#testimonials" className="text-black hover:text-purple-600">
                        Testimonials
                    </Navbar.Link>
                    <Navbar.Link href="#galeri" className="text-black hover:text-purple-600">
                        Gallery
                    </Navbar.Link>
                    <Navbar.Link href="#daftar" className="text-black hover:text-purple-600">
                        Register
                    </Navbar.Link>
                    <DarkThemeToggle className="p-0" />
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export { Navbar };
