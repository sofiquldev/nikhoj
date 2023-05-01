import { create } from 'zustand'

const useStore = create((set) => {
  return ({
    darkMood: undefined,
    sidebar: false,
    searchTerm: '',
    setDarkMood: props => set(() => ({darkMood: props})),
    setSidebar: props => set(() => ({sidebar: props})),
    setSearchTerm: props => set(() => ({searchTerm: props.value.toLowerCase()}))
  })
})

export default useStore