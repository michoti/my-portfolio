import { create } from 'zustand'

interface PortfolioStore {
  activeSection: string
  sessionId: string
  isNavOpen: boolean
  resumeDownloaded: boolean
  
  setActiveSection: (section: string) => void
  setSessionId: (id: string) => void
  setNavOpen: (open: boolean) => void
  setResumeDownloaded: (val: boolean) => void
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeSection: 'home',
  sessionId: '',
  isNavOpen: false,
  resumeDownloaded: false,

  setActiveSection: (section) => set({ activeSection: section }),
  setSessionId: (id) => set({ sessionId: id }),
  setNavOpen: (open) => set({ isNavOpen: open }),
  setResumeDownloaded: (val) => set({ resumeDownloaded: val }),
}))
