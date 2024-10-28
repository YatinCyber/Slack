// import { useAppAuth } from '@/base/store/zustand/auth.ts'
// import { Role } from '@/types/@pharmacy/entity/role.ts'
// import React,{PropsWithChildren} from 'react'

// type Props = {
// 	allowedRoles: Role[];
// 	component?: React.ReactNode | string
// }

// const RoleBasedComponent = ({children, allowedRoles, component}: PropsWithChildren<Props>) => {
// 	const {user} = useAppAuth()
// 	return (
// 		<>
// 			{allowedRoles.includes(user.role) ? component ?? children : null}
// 		</>	
// 	)
// }

// export default RoleBasedComponent
