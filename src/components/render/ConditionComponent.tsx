import React, { PropsWithChildren } from 'react'

interface Props {
	condition: boolean | (() => boolean)
	component?: React.ReactNode  | string,
	elseComponent?: React.ReactNode | string

}

const ConditionComponent = ({condition, children, component, elseComponent}: PropsWithChildren<Props>) => {
	return <>
		{condition ? component ?? children : elseComponent ?? null}
	</>
}

export default ConditionComponent
