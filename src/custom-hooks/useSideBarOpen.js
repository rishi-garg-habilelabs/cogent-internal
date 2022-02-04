import { useSelector } from 'react-redux'

export default function useSideBarOpen () {
  let isSideBarOpen = useSelector((state) => state.isSideBarOpen)
  return isSideBarOpen
}