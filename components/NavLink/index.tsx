'use client'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import styles from "./navLink.module.css"
import { usePathname } from 'next/navigation'
interface NavLinkProps extends PropsWithChildren {
    href: string
  }

const NavLink = ({ children, href }: NavLinkProps) => {
    const path= usePathname()
  return (
    <Link
    href={href}
    className={[styles.link,path===href ?styles.active:''].join()}
    >
      {children}
    </Link>
  )
}

export default NavLink
