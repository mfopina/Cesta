import React from "react";
import {Image, Text, StyleSheet, Dimensions, View} from "react-native";
import topo from '../../topo.png';
import logo from '../../logo.png';
const altura = Dimensions.get('screen').width;
const largura = Dimensions.get('screen').height;

export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}> Detalhes da Cesta </Text>

<View style={estilos.cesta}>
<Text style={estilos.nome}>Cesta de Verduras </Text>

<View style={estilos.fazenda}>
<Image source={logo} style={estilos.logo} />
<Text style={estilos.nomeFazenda}>
      Jenny Jack Farm
</Text>

</View>

<Text style={estilos.descricao}>
 Uma cesta com produtos selecionados direto da Fazenda
</Text>

<Text style={estilos.preco}> R$ 40,00  </Text> 

</View>

    </> 
}

const estilos = StyleSheet.create({

      topo:{
        width: '700px',
        height: 200 / largura * altura,
      },
      titulo:{
        position: 'absolute',
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
      },
      nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
      },
      cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
       nomeFazenda:{
         fontSize: 16,
         lineHeight: 26,
       },
       descricao:{
         color:"#A3A3A3",
         fontSize: 16,
         lineHeight: 26,
       },
       preco:{
         color: "#2A9F85",
         fontSize: 26,
         lineHeight: 42,
         marginTop: 8,
       },
       logo:{
         width: 32,
         height: 32,
       },
       fazenda:{
         flexDirection: "row",
       }

})