import { StatusBar } from 'react-native';
import Home from './src/screen/HOME';


export default function App() {
  return(
    <>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent={true}>
      </StatusBar>
      <Home></Home>
    </>
  )
}

{/* Statusbar serve para alterar a cor dos ícones do celular no topo
  barstyle altera a cor dos ícones
  backgrounColor altera a cor do background do topo
   translucent={true} status bar sobrepor a inferface

*/}