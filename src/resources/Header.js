//import libraries

import React from 'react';
import {Text,View} from 'react-native';


//make a component
const Header = (props) => {

    const {textStyle,viewStyle}=style;


    return (
        <View style={viewStyle}>
        <Text style={textStyle}>
            {props.headerText}
        </Text>
        </View>
    );
};

const style =
    {
        viewStyle:{

            backgroundColor:'#faebd7',
            justifyContent:'center',
            alignItems:'center',
            height:60,
            paddingTop:15,
            shadowColor:'#000',
            shadowOffset:{width:0,height:5},
            shadowOpacity:0.5,
            elevation:2,
            position:'relative'
        },
        textStyle:{
            fontSize:35,
          color:'red'
        }
    };



export default Header;