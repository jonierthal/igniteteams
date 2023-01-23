import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewGroup } from "@screens/NewGroup";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string){
    try{
        await AsyncStorage.setItem(GROUP_COLLECTION, NewGroup);
    }
    catch(error){
        throw error;
    }
}