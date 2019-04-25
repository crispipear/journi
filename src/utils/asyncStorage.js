import AsyncStorage from '@react-native-community/async-storage';

export const get = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch(e) {
      console.log('error at get item from async storage: ', e)
    }
}
export const set = async (key, val) => {
    try {
      await AsyncStorage.setItem(key, val)
      console.log(`stored ${key}: `, val)
    } catch(e) {
        console.log('error at set item from async storage: ', e)
    }
}

export const remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log('error at remove item from async storage: ', e)
    }
}