interface DashboardLayoutProps{
    children : React.ReactNode
}
 const DashBoardLayout = ({children} : 
    DashboardLayoutProps
)=>{
    return (
        <div>
            {children}
        </div>
    )
}
export default DashBoardLayout