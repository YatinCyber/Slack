// import { useAppAuth } from "@/base/store/zustand/auth";


// //fixlate
// const useRoleTheme = () => {
//   const { user } = useAppAuth();
//   const role = user?.role ?? "";
//   const rColor = () => {
//     // return ` text-xxx-800 `.replaceAll("xxx", role.toLowerCase());
//     switch (role) {
//       case "Manager":
//         return ` text-manager `;
//       case "Staff":
//         return ` text-staff `;
//       case "Stockkeeper":
//         return ` text-stockkeeper `;
//       default:
//         return ` text-sky `;
//     }
//   }
//   const rButtonColor = () => {
//     switch (role) {
//       case "Manager":
//         return ` bg-manager-800 hover:bg-manager active:bg-manager-900 shadow-none drop-shadow-none border-none `;
//       case "Staff":
//         return ` bg-staff-800 hover:bg-staff active:bg-staff-900 shadow-none drop-shadow-none border-none `;
//       case "Stockkeeper":
//         return ` bg-stockkeeper-800 hover:bg-stockkeeper active:bg-stockkeeper-900 shadow-none drop-shadow-none border-none `;
//       default:
//         return ` bg-blue-400 hover:bg-blue-500 active:bg-blue-600 shadow-none drop-shadow-none border-none `;
//     }
//     // return ` bg-xxx-800 hover:bg-xxx shadow-none drop-shadow-none border-none `.replaceAll("xxx", role.toLowerCase());
//     // return ` bg-${role.toLowerCase()}-800 hover:bg-${role.toLowerCase()} `;
//   }

  
//   return {
//     rColor,
//     rButtonColor,
//   };
// }

// export default useRoleTheme;