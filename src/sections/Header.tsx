'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import logo from '../images/modular-summit-logo.svg'
import { pageData } from '@/lib/data/home'

export default function Header() {
  const currentPageSlug = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const getLinkClassName = (href: string) => {
    const baseClasses = 'text-xl sm:text-[16px]'
    return `${baseClasses} ${currentPageSlug === href ? 'font-bold text-[#423ABB]' : 'font-semibold text-black'}`
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="sticky top-0 z-10 mx-auto max-w-[1980px]">
      <header className="flex basis-auto items-center justify-between bg-white px-3 py-3 sm:px-[32px] sm:py-2.5 xl:py-[16px]">
        <div className="flex items-center space-x-3 md:space-x-10">
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="mt-[1px] md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="w-100% mx-auto lg:mx-0 xl:w-auto">
            <Link href="/">
              <Image src={logo} alt={pageData.HeroSection.title} width={173} height={44} className="max-w-[120px] sm:max-w-full" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-5">
            <Link className={getLinkClassName('/')} href="/">
              Home
            </Link>
            <Link className={getLinkClassName('/speakers')} href="/speakers">
              Speakers
            </Link>
            <Link className={getLinkClassName('/sovereign')} href="/sovereign">
              Sovereign Radio
            </Link>
            <Link className={getLinkClassName('/location')} href="/location">
              Getting There
            </Link>
            <Link className={getLinkClassName('/agenda')} href="/agenda">
              Agenda
            </Link>
          </div>
        </div>

        {/* Ticket button */}
        <div className="basis-auto">
          <a
            className="flex w-fit items-center rounded-full bg-brand-blue px-5 py-2 transition-colors hover:bg-[#94caf6] max-sm:ml-5 sm:px-[28px] sm:py-[14px]"
            href={pageData.HeroSection.tickets}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 sm:mr-4 md:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 5V7M13 17V19M13 11V13M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7956 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7956 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden text-[20px] font-normal sm:block">{pageData.HeroSection.ticketButton.title}</span>
          </a>
        </div>
      </header>

      {/* Mobile fly-out menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white shadow-lg ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-5">
          <button onClick={toggleMenu} className="mb-8">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link className={getLinkClassName('/')} href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className={getLinkClassName('/speakers')} href="/speakers" onClick={toggleMenu}>
              Speakers
            </Link>
            <Link className={getLinkClassName('/sovereign')} href="/sovereign" onClick={toggleMenu}>
              Sovereign
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
