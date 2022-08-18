/*import React from 'react';
import { StyleSheet, Text,TouchableOpacity,IconContext View } from 'react-native';
import {Navbar} from'./src/Navbar'
import { AddTodo } from './src/AddTodo';
import {SideBar} from './src/SideBar';
import { SidebarData } from "./SidebarData" ;
import SubMenu from "./SubMenu" ;
import { IconContext } from "react-icons/lib" ;
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title= 'my-secAp'/>
      <AddTodo />

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Pick a photo</Text>
      </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}

});
*/
 
import Sidebar from "./Sidebar" ;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" ;
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs" ;
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services" ;
import { Events, EventsOne, EventsTwo } from "./pages/Events" ;
import Contact from "./pages/ContactUs" ;
import Support from "./pages/Support" ;
function App() {
return (
<Router>
<Sidebar />
<Switch>
<Route path= "/about-us" exact component={AboutUs} />
<Route path= "/about-us/aim" exact component={OurAim} />
<Route path= "/about-us/vision" exact component={OurVision} />
<Route path= "/services" exact component={Services} />
<Route path= "/services/services1" exact component={ServicesOne} />
<Route path= "/services/services2" exact component={ServicesTwo} />
<Route path= "/services/services3" exact component={ServicesThree} />
<Route path= "/contact" exact component={Contact} />
<Route path= "/events" exact component={Events} />
<Route path= "/events/events1" exact component={EventsOne} />
<Route path= "/events/events2" exact component={EventsTwo} />
<Route path= "/support" exact component={Support} />
</Switch>
</Router>
);
}
export default App; 

