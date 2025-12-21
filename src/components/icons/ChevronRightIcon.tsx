interface ChevronRightIconProps {
  className?: string
}

export function ChevronRightIcon({ className = "w-8 h-8" }: ChevronRightIconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
    </svg>
  )
}
