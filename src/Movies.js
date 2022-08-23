import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

function Movies() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=065ffbcf2742d39e453500abc886db7b&language=en-US&page=1');
      let json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  // const renderItem = 




  return (
    <View>
      <Text className="text-[20px] font-bold ">Movies List</Text>
      <View className="rounded-lg mt-2">
        <View className="flex-row w-96">
          <View className="rounded-lg">
            <Image
              className="w-36 h-52 rounded"
              source={{ uri: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/capsule_616x353.jpg?t=1660316394" }}
            />
          </View>
          <View className="ml-2">
            <Text className="text-red-600 text-xl font-bold mb-3">Spiderman</Text>
            <Text className="text-sm "><Ionicons name='star' color='orange' size={16} /> 7.8/10 IMDb</Text>
            <View className="flex-row my-3">
              <Text className="mr-2 bg-slate-400 text-slate-300 p-2 rounded-lg">Action</Text>
              <Text className="bg-slate-400 p-2 text-slate-300 rounded-lg">Comedy</Text>
              <Text className="bg-slate-400 p-2 text-slate-300 rounded-lg ml-2">Drama</Text>
            </View>
            <Text className="text-sm"><Ionicons name='time' size={15} /> 2h 59min</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View className="rounded-lg mt-2">
              <View className="flex-row w-96">
                <View className="rounded-lg">
                  <Image
                    className="w-36 h-52 rounded"
                    source={{ uri: "https://image.tmdb.org/t/p/original/" + item.backdrop_path }}
                  />
                </View>
                <View className="ml-2">
                  <Text className="text-red-600 text-xl font-bold mb-3">{item.title}</Text>
                  <Text className="text-sm "><Ionicons name='star' color='orange' size={16} /> {item.vote_average}/10 IMDb</Text>
                  <View className="flex-row my-3">
                    <Text className="mr-2 bg-slate-400 text-slate-300 p-2 rounded-lg">Action</Text>
                    <Text className="bg-slate-400 p-2 text-slate-300 rounded-lg">Comedy</Text>
                    <Text className="bg-slate-400 p-2 text-slate-300 rounded-lg ml-2">Drama</Text>
                  </View>
                  <Text className="text-sm"><Ionicons name='time' size={15} /> 2h 49min</Text>
                </View>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Movies

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     backgroundColor: '#fff',
//     flexDirection: "row"
//   },
// });