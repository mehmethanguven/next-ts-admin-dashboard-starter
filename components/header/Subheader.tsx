import React from 'react'

type Props = {
  title: string
}

const Subheader = ({ title }: Props) => {
  return (
    <h2
      data-testid="dashboard"
      className="mx-4 rounded-t-lg border-b-0 bg-white p-6 font-semibold"
    >
      {title}
    </h2>
  )
}

export default Subheader
