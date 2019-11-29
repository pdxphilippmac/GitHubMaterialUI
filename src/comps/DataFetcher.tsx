import * as React from "react"
import { FC } from "react"

interface DataWrapperProps {
    children?: React.ReactNode
    title: string
}

export const DataWrapper: FC<DataWrapperProps> = (title, children) => <div>{children}{title}</div>