import React from 'react';
import Layout from '../components/Layout';
import {Text,View,StyleSheet} from 'react-native-web';
import Data from '../proiect/aboutMy.json';

function About() {
    return (<div>
        <Layout>
            <View> {Data.map((data,index) => {
                return <View key={data.id} style={styles.view}>
                  <h1 >{data.nume}</h1>
                  <h2>{data.ani}</h2>
                  <h2>{data.about}</h2>
                  <h2>{data.experince}</h2>
                  <h2>{data.description}</h2>
                  <h3>{data.phone}</h3>
                  <h3>{data.email}</h3>
                  <h3>{data.githup}</h3>
                  <h2>{data.thanks}</h2>
                  </View>
                  
                  
                 
                  
                })}
                </View>
                </Layout>
                </div>
                
        )
    }
const styles = StyleSheet.create({
    
    view:{
        color:'white',
        position:'relative',
        left:"5%",
        width:'90%',
        height: 'auto',
        marginVertical:"2%",
        borderRadius:"10%",
        backgroundColor:"#3b3534",
        textAlign:'center',
        
       
        
        
    }})

export default About;
