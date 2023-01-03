import Logo from "../logo/logo.component";

const Navigation = (props: {onRouteChange: (route: string) => void}) => {
    return (
        <nav style={{display:'flex', justifyContent: 'space-between'}}>
          <Logo />
            <p className="f3 link dim black underline pa3 pointer" onClick={() => props.onRouteChange('signin')}>Sign Out</p>
        </nav>
    )
}

export default Navigation;
