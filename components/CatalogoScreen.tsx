import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

import catalogo from "../catalogo.json";

export default function CatalogoScreen() {
  const itens = catalogo;

  return (
    <ScrollView style={styles.container}>
        <View style={styles.contenttitle}>
            <Text style={styles.h1}>Meus filmes Favoritos</Text>
        </View>
        <View style={styles.contentcards}>
            {itens.map((item) => (
                <TouchableOpacity key={item.id} style={styles.card}>
                <View style={styles.infoimg}>
                    <Image source={{ uri: item.imagem }} style={styles.imagemItem}/>
                </View>
                <View style={styles.infocards}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text>{item.produtora}</Text>
                    <Text>{item.ano}</Text>
                </View>
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
  },

  contentcards: {
    height: "90%",
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    
    
  },

  infocards: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  infoimg: {
    height: '60%',
    width: '100%'
  },

  contenttitle: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  h1:{
    color: 'black',
    fontSize: 40
  },

  card: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },

  titulo: {
    fontSize: 20,
  },

  imagemItem: {
    width: '100%', // Exemplo de largura
    height: 200, // Exemplo de altura
    borderTopLeftRadius: 12,
    borderTopRightRadius:12
  },
});
