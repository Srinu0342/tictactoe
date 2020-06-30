import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Entypo} from '@expo/vector-icons';

var itemArray= new Array(9).fill('empty');

export default class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {
      isCross:true,
      winMessage:''
    };
  }

  drawItem = itemNumber => {
    //this function is to decide what to draw: circle or cross or default
    if ((itemArray[itemNumber]==='empty')&&(this.state.winMessage==='')){
      itemArray[itemNumber]=this.state.isCross;
      this.setState({isCross:!itemArray[itemNumber]});
    }
    this.winGame();
  };
    // check for win

  chooseIcon= itemNumber =>{
    //this function is to select the x or o icon accordingly to the state of isCross
    if (itemArray[itemNumber]!=='empty'){
      return itemArray[itemNumber] ? 'cross' : 'circle';
    }
    else {
      return 'pencil';
    }
  };

  resetGame=()=>{
    itemArray.fill('empty');
    this.setState({winMessage:""});
    this.setState({isCross:true});
    this.forceUpdate();
  };

  winGame=()=>{
    if ((itemArray[0]!=='empty') && (itemArray[0]==itemArray[1]) && (itemArray[1]==itemArray[2])){
      this.setState({winMessage:(itemArray[0] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[3]!=='empty') && (itemArray[3]==itemArray[4]) && (itemArray[4]==itemArray[5])){
      this.setState({winMessage:(itemArray[3] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[6]!=='empty') && (itemArray[6]==itemArray[7]) && (itemArray[7]==itemArray[8])){
      this.setState({winMessage:(itemArray[6] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[0]!=='empty') && (itemArray[0]==itemArray[3]) && (itemArray[3]==itemArray[6])){
      this.setState({winMessage:(itemArray[0] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[1]!=='empty') && (itemArray[1]==itemArray[4]) && (itemArray[4]==itemArray[7])){
      this.setState({winMessage:(itemArray[1] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[2]!=='empty') && (itemArray[2]==itemArray[5]) && (itemArray[5]==itemArray[8])){
      this.setState({winMessage:(itemArray[2] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else  if ((itemArray[0]!=='empty') && (itemArray[0]==itemArray[4]) && (itemArray[4]==itemArray[8])){
      this.setState({winMessage:(itemArray[0] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
    else if ((itemArray[2]!=='empty') && (itemArray[2]==itemArray[4]) && (itemArray[4]==itemArray[6])){
      this.setState({winMessage:(itemArray[2] ? 'Cross' : 'Circle').concat(' wins the game')});
    }
  };

  render(){
  return (
    <View style={styles.Container}>
      <View style={styles.Heading}>
        <Text style={styles.headingText}> Tic Tac Toe</Text>
      </View>
      <View style={styles.gameBox}>
        <View style={styles.box}>
          <TouchableOpacity 
            onPress={()=>{this.drawItem(0);}}
          >
            <Entypo
            name={this.chooseIcon(0)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(1);}}
          >
            <Entypo
            name={this.chooseIcon(1)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(2);}}
          >
            <Entypo
            name={this.chooseIcon(2)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(3);}}
          >
            <Entypo
            name={this.chooseIcon(3)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(4);}}
          >
            <Entypo
            name={this.chooseIcon(4)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(5);}}
          >
            <Entypo
            name={this.chooseIcon(5)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(6);}}
          >
            <Entypo
            name={this.chooseIcon(6)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(7);}}
          >
            <Entypo
            name={this.chooseIcon(7)}
            size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity 
            onPress={()=>{this.drawItem(8);}}
          >
            <Entypo
            name={this.chooseIcon(8)}
            size={50}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginBottom:30}}>
        <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>{this.state.winMessage}</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.clearbtn}
          onPress={()=>{this.resetGame();}}
        >
          <Text style={{fontSize:20,fontWeight:"bold",color:"#25CCF7"}}>RESET GAME</Text>
        </TouchableOpacity>
      </View>
    </View>
    );}
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor: "#F5BCBA",
    borderColor:"#53E0BC",
    borderWidth:5,
    borderRadius:30,
    alignItems: 'center'
  },
  Heading: {
    marginTop:40,
    height:40,
    width: '95%', 
    backgroundColor: "#74B9FF",
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText:{
    fontSize:30,
    fontWeight: "bold",
    color: 'white'
  },
  gameBox: {
    marginTop:70,
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  box:{
    height:120,
    borderWidth:5,
    borderColor:'#A3CB37',
    width: '30%',
    backgroundColor: '#F9DDA4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill:{
    fontSize: 80, 
    color: 'white',
    fontWeight:"bold"
  },
  btn:{
    flex:.5
  },
  clearbtn: { 
    borderWidth:2,
    padding:10,
    borderRadius:7,
    borderColor: "#25CCF7",
    backgroundColor:"#DAE0E2"
   }
});
